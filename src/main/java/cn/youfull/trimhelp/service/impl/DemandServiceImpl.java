package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.*;
import cn.youfull.trimhelp.mapper.*;
import cn.youfull.trimhelp.service.DemandService;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Slf4j
public class DemandServiceImpl implements DemandService {

    @Autowired
    private DemandMapper demandMapper;
    @Autowired
    private DecoratestyleMapper decoratestyleMapper;
    @Autowired
    private DemandTypeMapper demandTypeMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private VieListMapper vieListMapper;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Resource(name = "redisTemplate")
    private ValueOperations<String, String> redisStr;

    @Resource(name = "redisTemplate")
    private HashOperations<String, String, DemandEx> redisHash;

    private String keyName = "demandEx";

    @Override
    public int addDemandInfo(DemandEx demandEx) {
        Demand demand = new DemandEx();
        BeanUtils.copyProperties(demandEx, demand);
        QueryWrapper<Demandtype> wrapper = new QueryWrapper<>();
        wrapper.eq("typeName", demandEx.getDemandTypeName());
        long id = demandTypeMapper.selectOne(wrapper).getId();
        if (id > 0) {
            demand.setDemandTypeId(id);
            Decoratestyle decoratestyle = new Decoratestyle();
            QueryWrapper<Decoratestyle> wrapper1 = new QueryWrapper<>();
            wrapper1.eq("decorateStyleName", demandEx.getDecoratestyleName());
            long styleid = decoratestyleMapper.selectOne(wrapper1).getDecorateStyleid();
            if (styleid > 0) {
                demand.setDecoratestyleId(styleid);
                demand.setReleaseTime(new Date());
                int insert = demandMapper.insert(demand);
                redisHash.put(keyName, String.valueOf(demandEx.getId()), demandEx);
                log.info("向redis新增一条需求");
                return insert;
            }
            return 0;
        }
        return 0;
    }

    //可优化->使用缓存后，可以从缓存中的所有需求列表中使用Stream流筛选
    @Override
    public DemandEx selectDemandById(long id) {
        if (redisHash.hasKey("demandEx", id + "")) {
            if (redisHash.get("demandEx", id + "") == null) {
                log.info("------>redis中不存杂需求id为" + id + "的信息!!");
                return null;
            }
            log.info("------>从redis查询出需求id为" + id + "的信息!!");
            return (DemandEx) redisHash.get("demandEx", id + "");
        }
        Demand demand = demandMapper.selectById(id);
        if (demand != null) {
            DemandEx demandEx = new DemandEx();
            BeanUtils.copyProperties(demand, demandEx);
            demandEx.setDecoratestyleName(decoratestyleMapper.selectById(demand.getDecoratestyleId()).getDecorateStyleName());
            demandEx.setDemandTypeName(demandTypeMapper.selectById(demand.getDemandTypeId()).getTypeName());
            redisHash.put(keyName, String.valueOf(id), demandEx);
            log.info("---->向redis中插入一条需求信息");
            return demandEx;
        }
        redisHash.put(keyName, String.valueOf(id), null);
        log.info("---->向redis中插入一条需求信息");
        return null;
    }

    @Override
    public long selectDemandByTitleAndContent(String title, String content, long releaseId) {
        QueryWrapper<Demand> wrapper = new QueryWrapper<>();
        wrapper.eq("title", title)
                .and((i) -> i.eq("content", content))
                .and((i) -> i.eq("releaseId", releaseId));
        if (demandMapper.selectOne(wrapper) != null) {
            return 1;
        }
        return 0;
    }

    @Override
    public List<DemandEx> selectAllDemands(int typleId, int styleId, String demandtitle) {
        if (redisTemplate.hasKey(keyName)) {
            List<DemandEx> values = redisHash.values(keyName);
            List<DemandEx> collect = values.stream().filter(v -> {
                if (styleId == 9 && demandtitle != null && !"".equals(demandtitle.trim())) {
                    return v.getTitle().contains(demandtitle.trim()) && v.getDemandTypeId() == typleId;
                } else if (styleId != 9 && demandtitle != null && !"".equals(demandtitle.trim())) {
                    return v.getTitle().contains(demandtitle.trim()) && v.getDemandTypeId() == typleId && v.getDecoratestyleId() == styleId;
                } else if (styleId != 9 && (demandtitle == null || "".equals(demandtitle.trim()))) {
                    return v.getDemandTypeId() == typleId && v.getDecoratestyleId() == styleId;
                } else {
                    return v.getDemandTypeId() == typleId;
                }
            })
                    .collect(Collectors.toList());
            log.info("从redis中读取所有公司信息");
            return collect;
        }
        List<DemandEx> demands = new ArrayList<>();
        QueryWrapper<Demand> wrapper = new QueryWrapper<>();
        wrapper.eq("demandTypeId", typleId)
                .and((i) -> i.eq("state", 0));
        if (styleId != 9) {
            wrapper.and((i) -> i.eq("decoratestyleId", styleId));
        }
        if (demandtitle != null && !"".equals(demandtitle.trim())) {
            wrapper.like("title", demandtitle.trim());
        }
        if (demandMapper.selectList(wrapper) != null) {
            DemandEx demand = null;
            List<Demand> demands1 = demandMapper.selectList(wrapper);
            for (Demand demand1 : demands1) {
                demand = new DemandEx();
                BeanUtils.copyProperties(demand1, demand);
                demand.setDecoratestyleName(decoratestyleMapper.selectById(demand1.getDecoratestyleId()).getDecorateStyleName());
                demand.setDemandTypeName(demandTypeMapper.selectById(demand1.getDemandTypeId()).getTypeName());
                demands.add(demand);
                redisHash.put(keyName, String.valueOf(demand.getId()), demand);
                log.info("---->向redis中插入一条需求信息");
            }
        } else {
        }
        return demands;
    }

    @Override
    public List<DemandEx> selectAllDemands(String demandtitle) {
        if (redisTemplate.hasKey(keyName)) {
            List<DemandEx> values = redisHash.values(keyName);
            log.info("从redis中读取所有公司信息");
            if (demandtitle != null && !"".equals(demandtitle.trim())) {
                values = values.stream().filter(v -> v.getTitle().contains(demandtitle.trim()))
                        .collect(Collectors.toList());
            }
            return values;
        }
        List<DemandEx> demands = new ArrayList<>();
        QueryWrapper<Demand> wrapper = new QueryWrapper<>();
        wrapper.eq("state", 0);
        if (demandtitle != null && !"".equals(demandtitle.trim())) {
            wrapper.like("title", demandtitle.trim());
        }
        List<Demand> demands2 = demandMapper.selectList(wrapper);
        if (demands2 != null) {
            DemandEx demand = null;
            for (Demand d : demands2) {
                demand = new DemandEx();
                BeanUtils.copyProperties(d, demand);
                demand.setDecoratestyleName(decoratestyleMapper.selectById(d.getDecoratestyleId()).getDecorateStyleName());
                demand.setDemandTypeName(demandTypeMapper.selectById(d.getDemandTypeId()).getTypeName());
                redisHash.put(keyName, demand.getId() + "", demand);
                log.info("---->向redis中插入一条需求信息");
                demands.add(demand);
            }
        }
        return demands;
    }
}

package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.*;
import cn.youfull.trimhelp.mapper.DecoratestyleMapper;
import cn.youfull.trimhelp.mapper.DemandMapper;
import cn.youfull.trimhelp.mapper.DemandTypeMapper;
import cn.youfull.trimhelp.mapper.StyleanddemandMapper;
import cn.youfull.trimhelp.service.DemandService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemandServiceImpl implements DemandService {

    @Autowired
    private DemandMapper demandMapper;
    @Autowired
    private StyleanddemandMapper styleanddemandMapper;
    @Autowired
    private DecoratestyleMapper decoratestyleMapper;
    @Autowired
    private DemandTypeMapper demandTypeMapper;

    @Override
    public int addDemandInfo(DemandEx demandEx) {
        Demand demand = new DemandEx();
        BeanUtils.copyProperties(demandEx, demand);
        QueryWrapper<Demandtype> wrapper = new QueryWrapper<>();
        wrapper.eq("typeName", demandEx.getDemandtype().getTypeName());
        long id = demandTypeMapper.selectOne(wrapper).getId();
        if (id > 0) {
            demand.setDemandTypeId(id);
            Decoratestyle decoratestyle = new Decoratestyle();
            QueryWrapper<Decoratestyle> wrapper1 = new QueryWrapper<>();
            wrapper1.eq("decorateStyleName", demandEx.getDecoratestyle().getDecorateStyleName());
            long styleid = decoratestyleMapper.selectOne(wrapper1).getDecorateStyleid();
            if (styleid > 0) {
                demand.setDecoratestyleId(styleid);
                int insert = demandMapper.insert(demand);
                return insert;
            }
            return 0;
        }
        return 0;
    }
}

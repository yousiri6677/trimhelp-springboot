package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.Companyinfo;
import cn.youfull.trimhelp.entity.CompanyinfoEx;
import cn.youfull.trimhelp.entity.DemandEx;
import cn.youfull.trimhelp.mapper.CompanyinfoMapper;
import cn.youfull.trimhelp.service.CompanyService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
@Slf4j
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyinfoMapper companyinfoMapper;


    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Resource(name = "redisTemplate")
    private ValueOperations<String, String> redisStr;

    @Resource(name = "redisTemplate")
    private HashOperations<String, String, CompanyinfoEx> redisHash;

    private String redisName = "CompanyEx";


    @Override
    public List<CompanyinfoEx> selectAllCompanyInfos(String companyProfile, long addressId, long companyTypeId, long companyStyleId) {
        QueryWrapper<Companyinfo> wrapper = new QueryWrapper<>();
       if (addressId != 0) {
            if (addressId!=1) wrapper.and(i -> i.eq("addressId", addressId));
        }
        if (companyTypeId != 0) wrapper.and(i -> i.eq("companyTypeId", companyTypeId));
        if (companyStyleId != 0) {
            if (companyStyleId!=9)wrapper.and(i -> i.eq("companyStyleId", companyStyleId));
        }
        if (companyProfile != null && !"".equals(companyProfile.trim())) wrapper.like("companyProfile", companyProfile.trim());
        List<Companyinfo> companyinfos = companyinfoMapper.selectList(wrapper);
        List<CompanyinfoEx> exList = new LinkedList<>();
        CompanyinfoEx companyinfoEx = null;
        for (Companyinfo companyinfo : companyinfos) {
            companyinfoEx = new CompanyinfoEx();
            BeanUtils.copyProperties(companyinfo, companyinfoEx);
            redisHash.put(redisName,companyinfoEx.getId()+"",companyinfoEx);
            log.info("-------------------->向redis中插入id为" + companyinfoEx.getId() + "的公司信息！");
            exList.add(companyinfoEx);
        }
        return exList;
    }

    @Override
    public CompanyinfoEx selectCompanyInfoById(long id) {
        if (redisHash.hasKey(redisName, id + "")) {
            CompanyinfoEx companyinfoEx = redisHash.get(redisName, id + "");
            log.info("-------------------->从redis中查询id为" + id + "的公司信息！");
            return companyinfoEx;
        } else {
            CompanyinfoEx companyinfo = new CompanyinfoEx();
            BeanUtils.copyProperties(companyinfoMapper.selectById(id), companyinfo);
            return companyinfo;
        }
    }

    @Override
    public CompanyinfoEx selectCompanyInfoByUserId(long userId) {
        QueryWrapper<Companyinfo> wrapper = new QueryWrapper<>();
        wrapper.eq("userId", userId);
        CompanyinfoEx companyinfoEx = new CompanyinfoEx();
        BeanUtils.copyProperties(companyinfoMapper.selectOne(wrapper), companyinfoEx);
        return companyinfoEx;
    }
}

package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.Decoratecase;
import cn.youfull.trimhelp.entity.DecoratecaseEx;
import cn.youfull.trimhelp.mapper.DecoratecaseMapper;
import cn.youfull.trimhelp.mapper.DecoratestyleMapper;
import cn.youfull.trimhelp.mapper.DemandTypeMapper;
import cn.youfull.trimhelp.service.CompanyService;
import cn.youfull.trimhelp.service.DecoratecaseService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
@EnableCaching
public class DecoratecaseServiceImpl implements DecoratecaseService {
    @Autowired
    private DecoratecaseMapper decoratecaseMapper;

    @Autowired
    private DecoratestyleMapper decoratestyleMapper;

    @Autowired
    private DemandTypeMapper demandTypeMapper;

    @Override
    public List<DecoratecaseEx> getDecoratecaseByCompanyId(long companyId) {
        QueryWrapper<Decoratecase> wrapper = new QueryWrapper<>();
        wrapper.eq("companyId",companyId);
        List<DecoratecaseEx> decoratecases = new LinkedList<>();
        List<Decoratecase> decoratecases1 = decoratecaseMapper.selectList(wrapper);
        DecoratecaseEx decoratecaseEx =null;
        for (Decoratecase decoratecase : decoratecases1) {
            decoratecaseEx = new DecoratecaseEx();
            BeanUtils.copyProperties(decoratecase,decoratecaseEx);
            decoratecaseEx.setDecorateStyleName(decoratestyleMapper.selectById(decoratecaseEx.getDecorateStyleId()).getDecorateStyleName());
            decoratecaseEx.setDemandTypeName(demandTypeMapper.selectById(decoratecaseEx.getDemandTypeId()).getTypeName());
            decoratecases.add(decoratecaseEx);
        }
        return decoratecases;
    }
}

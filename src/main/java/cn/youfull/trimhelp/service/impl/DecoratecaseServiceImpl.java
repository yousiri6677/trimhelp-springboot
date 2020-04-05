package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.Decoratecase;
import cn.youfull.trimhelp.mapper.DecoratecaseMapper;
import cn.youfull.trimhelp.service.CompanyService;
import cn.youfull.trimhelp.service.DecoratecaseService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DecoratecaseServiceImpl implements DecoratecaseService {
    @Autowired
    private DecoratecaseMapper decoratecaseMapper;

    @Override
    public List<Decoratecase> getDecoratecaseByCompanyId(long companyId) {
        QueryWrapper<Decoratecase> wrapper = new QueryWrapper<>();
        wrapper.eq("companyId",companyId);
        List<Decoratecase> decoratecases = decoratecaseMapper.selectList(wrapper);
        return decoratecases;
    }
}

package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.Decoratecase;

import java.util.List;

public interface DecoratecaseService {

    List<Decoratecase> getDecoratecaseByCompanyId(long companyId);
}

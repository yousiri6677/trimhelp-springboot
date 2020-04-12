package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.Decoratecase;
import cn.youfull.trimhelp.entity.DecoratecaseEx;

import java.util.List;

public interface DecoratecaseService {

    List<DecoratecaseEx> getDecoratecaseByCompanyId(long companyId);

    DecoratecaseEx getDecoratecaseInfoById(long id);
}

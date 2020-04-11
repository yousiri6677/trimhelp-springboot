package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.Companyinfo;
import cn.youfull.trimhelp.entity.CompanyinfoEx;

import java.util.List;

public interface CompanyService {

    List<CompanyinfoEx> selectAllCompanyInfos(String companyProfile,long addressId,long companyTypeId,long companyStyleId);

    CompanyinfoEx selectCompanyInfoById(long id);

    CompanyinfoEx selectCompanyInfoByUserId(long userId);

}

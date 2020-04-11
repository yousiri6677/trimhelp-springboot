package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.CompanyinfoEx;
import cn.youfull.trimhelp.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @Value("${pageSize}")
    private String pageSize;

    @RequestMapping("getCompanyInfo")
    @ResponseBody
    public Map<String, Object> getCompanyInfo(String companyProfile, long addressId, long companyTypeId, long companyStyleId) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("companys", companyService.selectAllCompanyInfos(companyProfile, addressId, companyTypeId, companyStyleId));
        map.put("pageSize", pageSize);
        return map;
    }

    @RequestMapping("getCompany")
    public String getCompany(long id, HttpServletRequest request){
        CompanyinfoEx companyinfoEx = companyService.selectCompanyInfoById(id);
        request.setAttribute("company_info",companyinfoEx);
        return "companyInfo";
    }
}

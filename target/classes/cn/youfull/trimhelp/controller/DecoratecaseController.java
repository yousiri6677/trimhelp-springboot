package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.Companyinfo;
import cn.youfull.trimhelp.entity.Decoratecase;
import cn.youfull.trimhelp.entity.DecoratecaseEx;
import cn.youfull.trimhelp.service.CompanyService;
import cn.youfull.trimhelp.service.DecoratecaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class DecoratecaseController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private DecoratecaseService decoratecaseService;

    @RequestMapping("getDecoratecases")
    @ResponseBody
    public Map<String, Object> getDecoratecasesByUserId(long userId) {
        HashMap<String, Object> map = new HashMap<>();
        Companyinfo companyinfo = companyService.selectCompanyInfoByUserId(userId);
        List<DecoratecaseEx> decoratecases = decoratecaseService.getDecoratecaseByCompanyId(companyinfo.getId());
        if (decoratecases==null){
            return null;
        }else {
            map.put("decoratecases",decoratecases);
            return map;
        }
    }
}

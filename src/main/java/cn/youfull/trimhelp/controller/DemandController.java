package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.DemandEx;
import cn.youfull.trimhelp.service.DemandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemandController {

    @Autowired
    private DemandService demandService;

    @RequestMapping("addDemand")
    @ResponseBody
    public String addDemandInfo(DemandEx demandEx){
        int i = demandService.addDemandInfo(demandEx);
        if (i>0){
            return "true";
        }
        return "false";
    }
}

package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.DemandEx;
import cn.youfull.trimhelp.service.DemandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemandController {

    @Autowired
    private DemandService demandService;

    @PostMapping("addDemand")
    @ResponseBody
    public String addDemandInfo(DemandEx demandEx){
        long l = demandService.selectDemandByTitleAndContent(demandEx.getTitle(), demandEx.getContent(),demandEx.getReleaseId());
        if (l==0){
            int i = demandService.addDemandInfo(demandEx);
            if (i>0){
                return "true";
            }
            return "false";
        }else{
            return "exist";
        }
    }
}
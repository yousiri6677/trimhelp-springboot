package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.Demand;
import cn.youfull.trimhelp.entity.DemandEx;
import cn.youfull.trimhelp.service.DemandService;
import org.apache.ibatis.annotations.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sun.rmi.runtime.Log;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class DemandController {

    @Autowired
    private DemandService demandService;

    @Value("${pageSize}")
    private String pageSize;


    @RequestMapping("getVieListInfos")
    @ResponseBody
    public Map<String, Object> getDemandVieListInfosByDemandId(long id) throws InstantiationException, IllegalAccessException {
        Map<String, Object> map = new HashMap<>();
        DemandEx demandEx = demandService.selectAllDemandsVieListByDemandId(id);
        map.put("demand_info",demandEx);
        map.put("pageSize",pageSize);
        return map;
    }

    @PostMapping("addDemand")
    @ResponseBody
    public String addDemandInfo(DemandEx demandEx) {
        long l = demandService.selectDemandByTitleAndContent(demandEx.getTitle(), demandEx.getContent(), demandEx.getReleaseId());
        if (l == 0) {
            int i = demandService.addDemandInfo(demandEx);
            if (i > 0) {
                return "true";
            }
            return "false";
        } else {
            return "exist";
        }
    }

    @PostMapping("getDemandInfos")
    @ResponseBody
    public Map<String, Object> getDemandInfos(int typeId, int styleId, String demandtitle) {
        Map<String, Object> map = new HashMap<>();
        map.put("demandInfos", demandService.selectAllDemands(typeId, styleId, demandtitle));
        map.put("pageSize",pageSize);
        return map;
    }

    @PostMapping("getAllDemandInfos")
    @ResponseBody
    public Map<String, Object> getAllDemandInfos(String demandtitle) {
        Map<String, Object> map = new HashMap<>();
        map.put("demandInfos", demandService.selectAllDemands(demandtitle));
        map.put("pageSize",pageSize);
        return map;
    }


    @RequestMapping("getDemandInfo")
    public String getDemandInfo(long id, HttpServletRequest request) {
        request.setAttribute("demandInfo", demandService.selectDemandById(id));
        return "projectHallInfo";
    }
}
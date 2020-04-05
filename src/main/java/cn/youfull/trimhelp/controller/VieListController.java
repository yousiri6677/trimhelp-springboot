package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.VieList;
import cn.youfull.trimhelp.entity.VieListEx;
import cn.youfull.trimhelp.service.VieListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class VieListController {
    @Autowired
    private VieListService vieListService;

    @RequestMapping("getVieListInfo")
    @ResponseBody
    public Map<String, Object> getVieList(long id) {
        VieListEx vieListEx = vieListService.selectVieListUsersByDemandId(id);
        Map<String, Object> map = null;
        if (vieListEx != null) {
            map = new HashMap<>();
            map.put("vieListInfos", vieListEx);
        }
        return map;
    }

    @RequestMapping(value = "addVieList",method = RequestMethod.PUT)
    @ResponseBody
    public String addVieList(VieList vieList){
        int i = vieListService.addVie(vieList);
        if (i==1){
            return "SUCCESS";
        }else if (i==-1){
            return "EXIST";
        }
        return "ERROR";
    }
}

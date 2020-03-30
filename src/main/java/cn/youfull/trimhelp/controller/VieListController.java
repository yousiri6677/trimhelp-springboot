package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.VieListEx;
import cn.youfull.trimhelp.service.VieListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
}

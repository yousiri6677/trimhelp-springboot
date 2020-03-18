package cn.youfull.trimhelp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class NavController {

    @RequestMapping("/toLogin")
    public String toLogin(){
        return "login";
    }

    @RequestMapping("/index")
    public String index(){
        return "index";
    }

    @RequestMapping("/toRegister")
    public String toregister(){
        return "register";
    }

    @RequestMapping("/toRelease")
    public String torelease(){
        return "release";
    }

    @RequestMapping("/toProjectHall")
    public String toprojectHall(){
        return "projectHall";
    }

    @RequestMapping("/toCompany")
    public String toCompany(){
        return "company";
    }



}

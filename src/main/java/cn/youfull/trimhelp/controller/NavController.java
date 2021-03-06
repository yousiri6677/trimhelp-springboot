package cn.youfull.trimhelp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
public class NavController {

    @RequestMapping("/toLogin")
    public String toLogin() {
        return "login";
    }

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/toRegister")
    public String toregister() {
        return "register";
    }

    @RequestMapping("/toRelease")
    public String torelease() {
        return "release";
    }

    @RequestMapping("/toProjectHall")
    public String toprojectHall() {
        return "projectHall";
    }

    @RequestMapping("/toCompany")
    public String toCompany() {
        return "company";
    }

    @RequestMapping("/toProjectHallInfo")
    public String toProjectHallInfo() {
        return "projectHallInfo";
    }

    @RequestMapping("/todecoration")
    public String toDecoration() {
        return "decoration";
    }

    @RequestMapping("/toPersonal")
    public String toPersonal(long id, HttpServletRequest request) {
        request.setAttribute("demandId",id);
        return "personal";
    }

    @RequestMapping("/toPersonalDemands")
    public String toPersonalDemands() {
        return "personalDemands";
    }

    @RequestMapping("/toCompanyInfo")
    public String toCompanyInfo(){
        return "companyInfo";
    }
}

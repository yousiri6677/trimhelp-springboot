package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.entity.UserEx;
import cn.youfull.trimhelp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;


@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    @ResponseBody
    public String login(String account, String passWord, HttpSession session) {
        User user = userService.loginByAccountAndPassWord(account, passWord);
        if (user != null) {
            session.setAttribute("user", user);
            return "SUCCESS";
        } else {
            return "ERROR";
        }
    }

    @ResponseBody
    @RequestMapping("/loginOut")
    public String loginOut(HttpSession session) {
        session.removeAttribute("user");
        return "success";
    }


    @PostMapping("/register")
    public String register(UserEx user) {
        int i = userService.addUser(user);
        if (i > 0) {
            return "login";
        } else {
            return "register";
        }
    }

}

package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(String account,String passWord){
        User user = userService.loginByAccountAndPassWord(account, passWord);
        if (user!=null){
            return "index";
        } else {
            return "login";
        }
    }


    @PostMapping("/register")
    public String register(User user){
        int i = userService.addUser(user);
        if (i>0){
            return "login";
        }else {
            return "register";
        }
    }

}
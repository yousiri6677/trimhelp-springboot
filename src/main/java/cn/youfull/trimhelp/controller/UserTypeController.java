package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.Usertype;
import cn.youfull.trimhelp.service.UserService;
import cn.youfull.trimhelp.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserTypeController {
    @Autowired
    private UserTypeService userTypeService;
    @Autowired
    private UserService userService;

    @RequestMapping("userTypeIs")
    public String userTypeIs(long id){
        Usertype usertype = userTypeService.selectUserTypeByUserId(userService.selectUserById(id).getUserTypeId());
        if (usertype!=null){
            if (usertype.getUserType().equals("管理员")){
                return "ADMIN";
            }else if (usertype.getUserType().equals("普通用户")){
                return "USER";
            }else if (usertype.getUserType().equals("商家")){
                return "STORE";
            }else if (usertype.getUserType().equals("公司")){
                return "COMPANY";
            }else {
                return "";
            }
        }else {
            return "ERROR";
        }
    }
}

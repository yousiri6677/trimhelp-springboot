package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.UserEx;


public interface UserService {

    UserEx loginByAccountAndPassWord(String account, String passWord);

    int addUser(UserEx user);
}

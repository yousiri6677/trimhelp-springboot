package cn.youfull.trimhelp.service;


import cn.youfull.trimhelp.entity.DemandEx;
import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.entity.UserEx;

import java.util.List;

public interface UserService {

    User loginByAccountAndPassWord(String account, String passWord);

    int addUser(User user);

    User selectUserById(long id);

    UserEx getPersonalDemandByUserId(long id) throws IllegalAccessException, InstantiationException;
}

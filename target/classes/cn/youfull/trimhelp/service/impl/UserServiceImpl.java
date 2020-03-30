package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.mapper.UserMapper;
import cn.youfull.trimhelp.service.UserService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;


@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public User loginByAccountAndPassWord(String account, String passWord) {
        QueryWrapper<User> qw = new QueryWrapper<>();
        qw.eq("account",account);
        qw.eq("passWord",passWord);
        User user = userMapper.selectOne(qw);
        return user;
    }

    @Override
    public int addUser(User user) {
        user.setUserState(1);
        user.setUserTypeId(4);
        user.setUserName(user.getAccount());
        user.setIdNumber("241242142141");
        int count = userMapper.insert(user);
        return count;
    }

    @Override
    public User selectUserById(long id) {
        return userMapper.selectById(id);
    }

}

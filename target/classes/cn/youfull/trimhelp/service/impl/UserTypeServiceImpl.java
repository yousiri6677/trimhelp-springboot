package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.Usertype;
import cn.youfull.trimhelp.mapper.UserTypeMapper;
import cn.youfull.trimhelp.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.stereotype.Service;

@Service
@EnableCaching
public class UserTypeServiceImpl implements UserTypeService {
    @Autowired
    private UserTypeMapper userTypeMapper;

    @Override
    public Usertype selectUserTypeByUserId(long id) {
        return userTypeMapper.selectById(id);
    }
}

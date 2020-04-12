package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.Demand;
import cn.youfull.trimhelp.entity.DemandEx;
import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.entity.UserEx;
import cn.youfull.trimhelp.mapper.DemandMapper;
import cn.youfull.trimhelp.mapper.UserMapper;
import cn.youfull.trimhelp.service.*;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.LinkedList;
import java.util.List;


@Service
@Slf4j
@EnableCaching
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Autowired
    private DemandService demandService;

    @Autowired
    private VieListService vieListService;

    @Autowired
    private CompanyService companyService;
    @Autowired
    private UserTypeService userTypeService;

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
        user.setUserState(0);
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


    @Override
    public UserEx getPersonalDemandByUserId(long id) throws IllegalAccessException, InstantiationException {
        User user = userMapper.selectById(id);
        UserEx userEx = new UserEx();
        BeanUtils.copyProperties(user,userEx);
      /*  QueryWrapper<Demand> wrapper = new QueryWrapper<>();
        wrapper.eq("releaseId", id);
        List<Demand> demands = demandMapper.selectList(wrapper);
        DemandEx demandEx = null;
        List<DemandEx> demandExes = new LinkedList<>();
        for (Demand demand : demands) {
            demandEx = new DemandEx();
            BeanUtils.copyProperties(demand, demandEx);
            //通过demandId查询竞标列表
            //demandEx.setVieListExes(vieListService.selectVieListByDemandId(demandEx.getId()));
            demandExes.add(demandEx);
        }*/
        userEx.setDemandExes(demandService.selectDemandsByReleaseId(id));
        log.info("============!!!!!!!!!!"+userEx.getUserTypeId());
        if (userTypeService.selectUserTypeByUserId(userEx.getUserTypeId()).getUserType().equals("公司")){
            userEx.setCompanyinfoEx(companyService.selectCompanyInfoByUserId(id));
            log.info("============!!!!!!!!!!"+userEx.getCompanyinfoEx());
        }
        return userEx;
    }
}

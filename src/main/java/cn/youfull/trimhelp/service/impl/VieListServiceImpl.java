package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.entity.UserEx;
import cn.youfull.trimhelp.entity.VieList;
import cn.youfull.trimhelp.entity.VieListEx;
import cn.youfull.trimhelp.mapper.UserMapper;
import cn.youfull.trimhelp.mapper.VieListMapper;
import cn.youfull.trimhelp.service.DecoratecaseService;
import cn.youfull.trimhelp.service.DemandService;
import cn.youfull.trimhelp.service.UserService;
import cn.youfull.trimhelp.service.VieListService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
@Slf4j
@EnableCaching
public class VieListServiceImpl implements VieListService {

    @Autowired
    private VieListMapper vieListMapper;
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private DemandService demandService;
    @Autowired
    private UserService userService;
    @Autowired
    private DecoratecaseService decoratecaseService;


    @Override
    public VieListEx selectVieListUsersByDemandId(long id) {
        VieListEx vieList = null;
        QueryWrapper<VieList> wrapper = new QueryWrapper<>();
        wrapper.eq("demandId", id);
        List<VieList> vieLists = vieListMapper.selectList(wrapper);
        if (vieLists != null) {
            vieList = new VieListEx();
            List<UserEx> users = new LinkedList<>();
            UserEx userEx = null;
            User user = null;
            for (VieList list : vieLists) {
                userEx = new UserEx();
                user = userMapper.selectById(list.getVieUserId());
                BeanUtils.copyProperties(user, userEx);
                users.add(userEx);
            }
            vieList.setDemandId(id);
            vieList.setList(users);
        }
        return vieList;
    }

    @Override
    public int addVie(VieList vieList) {
        QueryWrapper<VieList> wrapper = new QueryWrapper<>();
        wrapper.eq("demandId", vieList.getDemandId());
        List<VieList> vieLists = vieListMapper.selectList(wrapper);
        for (VieList list : vieLists) {
            if (list.getVieUserId() == vieList.getVieUserId()) {
                return -1;
            }
        }
        return vieListMapper.insert(vieList);
    }

    @Override
    public List<VieListEx> selectVieListByDemandId(long id) throws InstantiationException, IllegalAccessException {
        QueryWrapper<VieList> wrapper = new QueryWrapper<>();
        wrapper.eq("demandId", id);
        List<VieList> vieLists = vieListMapper.selectList(wrapper);
        List<VieListEx> vieListEx = new LinkedList();
        VieListEx listEx = null;
        for (VieList vieList : vieLists) {
            listEx = new VieListEx();
            BeanUtils.copyProperties(vieList, listEx);
            listEx.setUserEx(userService.getPersonalDemandByUserId(listEx.getVieUserId()));
            if (listEx.getCase1Id()!=0){
                listEx.setDecoratecaseExes1(decoratecaseService.getDecoratecaseInfoById(listEx.getCase1Id()));
            }
            if (listEx.getCase2Id()!=0){
                listEx.setDecoratecaseExes2(decoratecaseService.getDecoratecaseInfoById(listEx.getCase2Id()));
            }
            if (listEx.getCase3Id()!=0){
                listEx.setDecoratecaseExes3(decoratecaseService.getDecoratecaseInfoById(listEx.getCase3Id()));
            }
            vieListEx.add(listEx);
        }
        return vieListEx;
    }
}

package cn.youfull.trimhelp.service.impl;

import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.entity.VieList;
import cn.youfull.trimhelp.entity.VieListEx;
import cn.youfull.trimhelp.mapper.UserMapper;
import cn.youfull.trimhelp.mapper.VieListMapper;
import cn.youfull.trimhelp.service.VieListService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VieListServiceImpl implements VieListService {

    @Autowired
    private VieListMapper vieListMapper;
    @Autowired
    private UserMapper userMapper;


    @Override
    public VieListEx selectVieListUsersByDemandId(long id) {
        VieListEx vieList =null;
        QueryWrapper<VieList> wrapper = new QueryWrapper<>();
        wrapper.eq("demandId", id);
        List<VieList> vieLists = vieListMapper.selectList(wrapper);
        if (vieLists != null) {
            vieList=new VieListEx();
            ArrayList<User> users = new ArrayList<>();
            vieLists.forEach(i -> {
                User user = userMapper.selectById(i.getVieUserId());
                users.add(user);
            });
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
            if (list.getVieUserId()==vieList.getVieUserId()){
                return -1;
            }
        }
        return vieListMapper.insert(vieList);
    }
}

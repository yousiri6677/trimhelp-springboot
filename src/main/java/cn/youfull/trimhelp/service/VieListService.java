package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.VieList;
import cn.youfull.trimhelp.entity.VieListEx;

import java.util.List;

public interface VieListService {

    VieListEx selectVieListUsersByDemandId(long id);

    int addVie(VieList vieList);
}

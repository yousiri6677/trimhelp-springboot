package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.Demand;
import cn.youfull.trimhelp.entity.DemandEx;

import java.util.List;

public interface DemandService {

    int addDemandInfo(DemandEx demand);

    DemandEx selectDemandById(long id);

    //查询需求是否存在
    long selectDemandByTitleAndContent(String title,String content,long releaseId);

    //查询需求列表
    List<DemandEx> selectAllDemands(int typleId,int styleId,String demandtitle);

    List<DemandEx> selectAllDemands(String demandtitle);
}

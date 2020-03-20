package cn.youfull.trimhelp.service;

import cn.youfull.trimhelp.entity.Demand;
import cn.youfull.trimhelp.entity.DemandEx;

public interface DemandService {

    int addDemandInfo(DemandEx demand);

    //查询需求是否存在
    long selectDemandByTitleAndContent(String title,String content,long releaseId);
}

package cn.youfull.trimhelp.mapper;

import cn.youfull.trimhelp.config.RedisCache;
import cn.youfull.trimhelp.entity.Demandinfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.CacheNamespace;

@CacheNamespace(implementation = RedisCache.class)
public interface DemandInfoMapper extends BaseMapper<Demandinfo> {
}
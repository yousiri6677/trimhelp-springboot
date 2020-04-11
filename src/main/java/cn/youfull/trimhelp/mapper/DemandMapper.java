package cn.youfull.trimhelp.mapper;


import cn.youfull.trimhelp.config.RedisCache;
import cn.youfull.trimhelp.entity.Demand;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.CacheNamespace;

@CacheNamespace(implementation = RedisCache.class)
public interface DemandMapper extends BaseMapper<Demand> {
}

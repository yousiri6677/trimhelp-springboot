import cn.youfull.trimhelp.entity.DemandEx;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

import javax.annotation.Resource;

@SpringBootTest
@Slf4j
public class RedisTest {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Resource(name = "redisTemplate")
    private ValueOperations<String, String> redisStr;

    @Resource(name = "redisTemplate")
    private HashOperations<String, String, DemandEx> redisHash;

    @Test
    public void t1() {
//        redisStr.set("name:1", "张三");
        log.info("向redis中添加name1"+redisTemplate);
    }

}

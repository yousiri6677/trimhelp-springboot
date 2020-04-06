package cn.youfull.trimhelp.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
@Configuration
@Data
public class ConstantConfig {
    @Value("${endpoint}")
    private   String LXIMAGE_END_POINT;
    @Value("${keyid}")
    private  String LXIMAGE_ACCESS_KEY_ID;
    @Value("${keysecret}")
    private  String LXIMAGE_ACCESS_KEY_SECRET;
    @Value("${filehost}")
    private  String LXIMAGE_FILE_HOST;
    @Value("${bucketname1}")
    private  String LXIMAGE_BUCKET_NAME1;

}
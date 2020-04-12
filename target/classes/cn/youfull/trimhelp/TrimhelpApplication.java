package cn.youfull.trimhelp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("cn.youfull.trimhelp.mapper")
public class TrimHelpApplication {
    public static void main(String[] args) {
        SpringApplication.run(TrimHelpApplication.class,args);
    }
}

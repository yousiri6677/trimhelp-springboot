package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("decoratestyle")
public class Decoratestyle {
    //裝修風格表
    private long decorateStyleid;
    private String decorateStyleName;

}

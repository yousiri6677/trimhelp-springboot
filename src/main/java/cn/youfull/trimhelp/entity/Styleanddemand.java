package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("styleanddemand")
public class Styleanddemand {

    //需求于装修风格关系表
    private long styledetailsId;
    private long styleId;
    private long demandId;
}

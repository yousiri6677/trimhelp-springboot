package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("demandinfo")
public class Demandinfo {

    private long demandInfoId;
    private long demandTypeId;//对应需求类型Id
    private String demandInfoName;//具体需求名称
}

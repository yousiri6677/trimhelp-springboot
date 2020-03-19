package cn.youfull.trimhelp.entity;


import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("demand")
public class Demand {
    private long id;
    private String title;
    private String content;
    private long releaseId;
    private long demandTypeId;
    private double money;
    private String requirements;
    private Date releaseTime;
    private Date acceptanceTime;
    private String referenceDoc;
    private int state;
    private long decoratestyleId;

}

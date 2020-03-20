package cn.youfull.trimhelp.entity;


import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("demand")
public class Demand implements Serializable {

    private static final long serialVersionUID = -90000068L;
    private long id;
    private String title;
    private String content;
    private long releaseId;
    private long demandTypeId;
    private double money;
    private String requirements;
    private LocalDateTime releaseTime;
    private String acceptanceTime;
    private String referenceDoc;
    private int state;
    private long decoratestyleId;
    private String contactsName;
    private String phone;

}

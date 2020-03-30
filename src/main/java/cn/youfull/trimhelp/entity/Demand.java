package cn.youfull.trimhelp.entity;


import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("demand")
public class Demand implements Serializable {

    private static final long serialVersionUID = -90000068L;
    @TableId
    private long id;
    private String title;
    private String content;
    private long releaseId;
    private long demandTypeId;
    private double money;
    private String requirements;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime releaseTime;
    private String acceptanceTime;
    private String referenceDoc;
    private int state;
    private long decoratestyleId;
    private String contactsName;
    private String phone;

}

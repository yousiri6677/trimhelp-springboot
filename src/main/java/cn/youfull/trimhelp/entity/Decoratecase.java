package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("decoratecase")
public class Decoratecase {
    @TableId
    private long id;
    private long companyId;
    private long imgId;
    private String  title;
    private String content;
    private double area;
    private int browseNum;
    private long demandTypeId;

}

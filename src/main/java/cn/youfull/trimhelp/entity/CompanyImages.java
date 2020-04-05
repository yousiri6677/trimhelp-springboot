package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("companyImages")
public class CompanyImages {
    @TableId
    private  long id;
    /**
     * 图片大概信息
     */
    private String imgInfo;

    /**
     * 图片路径
     */
    private String imgPath;

    /**
     * 0:正常,1:默认
     */
    private Integer imgState;

    /**
     * 所属用户ID
     */
    private long userId;


}

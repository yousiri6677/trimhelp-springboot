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
@TableName("companyinfo")
public class Companyinfo implements Serializable {
    private static final long serialVersionUID = -90000084L;
    @TableId
    private long id;

    private long userId;
    private String companyProfile;
    private long companyLogo;
    private double regCapital;
    private long addressId;
    private long companyTypeId;
    private long companyStyleId;
    private String companyJianjie;
}

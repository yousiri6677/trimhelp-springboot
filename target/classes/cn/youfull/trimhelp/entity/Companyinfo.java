package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("companyinfo")
public class Companyinfo {
    @TableId
    private long id;

    private long userId;
    private String companyProfile;
    private long companyLogo;
    private double regCapital;
    private String address;
}

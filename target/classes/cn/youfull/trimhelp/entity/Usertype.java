package cn.youfull.trimhelp.entity;


import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("usertype")
public class Usertype {


    /**
     * 用户类型Id
     */
    @TableId
    private Integer Id;

    /**
     * 用户类型
     */
    private String userType;


}

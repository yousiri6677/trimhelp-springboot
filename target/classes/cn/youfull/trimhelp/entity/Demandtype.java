package cn.youfull.trimhelp.entity;


import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("demandtype")
public class Demandtype {

    @TableId
    private  long id;

    /**
     * 类型名称
     */
    private String typeName;
}

package cn.youfull.trimhelp.entity;


import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("demandtype")
public class Demandtype {


    private  long id;

    /**
     * 类型名称
     */
    private String typeName;
}

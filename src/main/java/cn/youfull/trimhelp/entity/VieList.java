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
@TableName("vieList")
public class VieList implements Serializable {
    private static final long serialVersionUID = -91821906L;
    @TableId
    private long vieId;
    private long demandId;
    private long vieUserId;
}

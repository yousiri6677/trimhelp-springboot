package cn.youfull.trimhelp.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("caseImgs")
public class CaseImgs {

    @TableId
    private long imgId;

    private String imgsrc;

    private long decoratecaseImgType;  //1:Logo，2：各种图
}

package cn.youfull.trimhelp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class UserEx extends User {

    /*手机验证码*/
    private String phoneCode;
    /*该用户可能为公司*/
    private CompanyinfoEx companyinfoEx;

    /*用户可能还有需求*/
    List<DemandEx> demandExes;

}

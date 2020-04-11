package cn.youfull.trimhelp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class CompanyinfoEx extends Companyinfo {

    /*公司的装修案例*/
    private List<DecoratecaseEx> decoratecases;

    /*所属用户*/
    private User user;

    /*公司位置*/
    private Address address;

    private String companyTypeName;

    private  String companyStyleName;
}

package cn.youfull.trimhelp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class VieListEx extends VieList {

    /*竞标人群*/
    private List<UserEx> list;

    private UserEx userEx;

    private DecoratecaseEx decoratecaseExes1;
    private DecoratecaseEx decoratecaseExes2;
    private DecoratecaseEx decoratecaseExes3;
}

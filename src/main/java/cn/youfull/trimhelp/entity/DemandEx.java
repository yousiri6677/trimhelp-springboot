package cn.youfull.trimhelp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.jws.soap.SOAPBinding;
import java.util.List;

@Data
public class DemandEx extends Demand {

      private String demandTypeName;

      private String decoratestyleName;

      /*竞标人群*/
      private List<User> userList;
}

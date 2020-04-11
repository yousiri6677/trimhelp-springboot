package cn.youfull.trimhelp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.jws.soap.SOAPBinding;
import java.io.Serializable;
import java.util.List;

@Data
public class DemandEx extends Demand implements Serializable {

      private static final long serialVersionUID = -90000003L;
      private String demandTypeName;

      private String decoratestyleName;

      /*竞标人群*/
      private List<User> userList;
}

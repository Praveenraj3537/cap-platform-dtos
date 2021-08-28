import { DtoBase } from "./cap-platform-common/cap-platform-dtobase/dtobase";

export class App_RolesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    roles?: number;
    apps?: number;
    app_role_permissions?: string;
}
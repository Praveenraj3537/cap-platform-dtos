import { DtoBase } from "./cap-platform-common/cap-platform-dtobase/dtobase";

export class Tenant_App_FeaturesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenantApps?: number;
    features?: number;
}
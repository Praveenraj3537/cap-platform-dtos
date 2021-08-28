import { DtoBase } from "./cap-platform-common/cap-platform-dtobase/dtobase";

export class Tenant_UsersDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenants?: number;
    users?: number;
    identity_provider_subscriber_id?: string;
}
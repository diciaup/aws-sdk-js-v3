import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The state of the DB security group does not allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault
  extends __ServiceException__<_InvalidDBSecurityGroupStateFaultDetails> {
  name: "InvalidDBSecurityGroupStateFault";
}

export interface _InvalidDBSecurityGroupStateFaultDetails {}

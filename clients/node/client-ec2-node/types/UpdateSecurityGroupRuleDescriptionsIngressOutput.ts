import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSecurityGroupRuleDescriptionsIngressOutput shape
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

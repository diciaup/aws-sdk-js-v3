import { _UnmarshalledByoipCidr } from "./_ByoipCidr";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AdvertiseByoipCidrOutput shape
 */
export interface AdvertiseByoipCidrOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: _UnmarshalledByoipCidr;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

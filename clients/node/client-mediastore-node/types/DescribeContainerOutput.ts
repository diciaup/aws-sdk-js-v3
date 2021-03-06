import { _UnmarshalledContainer } from "./_Container";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeContainerOutput shape
 */
export interface DescribeContainerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the queried container.</p>
   */
  Container?: _UnmarshalledContainer;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

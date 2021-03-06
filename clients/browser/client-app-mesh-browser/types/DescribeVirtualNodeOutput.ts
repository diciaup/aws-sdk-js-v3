import { _UnmarshalledVirtualNodeData } from "./_VirtualNodeData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVirtualNodeOutput shape
 */
export interface DescribeVirtualNodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of your virtual node.</p>
   */
  virtualNode: _UnmarshalledVirtualNodeData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

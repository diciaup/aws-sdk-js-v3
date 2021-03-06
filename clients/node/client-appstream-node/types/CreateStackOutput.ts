import { _UnmarshalledStack } from "./_Stack";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStackOutput shape
 */
export interface CreateStackOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the stack.</p>
   */
  Stack?: _UnmarshalledStack;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledSnapshot } from "./_Snapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AuthorizeSnapshotAccessOutput shape
 */
export interface AuthorizeSnapshotAccessOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: _UnmarshalledSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

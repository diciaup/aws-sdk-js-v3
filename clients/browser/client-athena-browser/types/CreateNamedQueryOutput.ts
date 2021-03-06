import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNamedQueryOutput shape
 */
export interface CreateNamedQueryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique ID of the query.</p>
   */
  NamedQueryId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

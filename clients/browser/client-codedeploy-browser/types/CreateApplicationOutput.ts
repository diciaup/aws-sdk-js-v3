import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a CreateApplication operation.</p>
 */
export interface CreateApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique application ID.</p>
   */
  applicationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

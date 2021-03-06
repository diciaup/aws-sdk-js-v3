import { _UnmarshalledPolicy } from "./_Policy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policies.</p>
   */
  policies?: Array<_UnmarshalledPolicy>;

  /**
   * <p>The marker for the next set of results, or null if there are no additional results.</p>
   */
  nextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

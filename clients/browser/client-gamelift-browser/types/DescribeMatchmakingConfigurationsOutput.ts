import { _UnmarshalledMatchmakingConfiguration } from "./_MatchmakingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeMatchmakingConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Collection of requested matchmaking configuration objects.</p>
   */
  Configurations?: Array<_UnmarshalledMatchmakingConfiguration>;

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

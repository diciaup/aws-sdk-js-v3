import { _UnmarshalledWorkflowExecutionInfo } from "./_WorkflowExecutionInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains a paginated list of information about workflow executions.</p>
 */
export interface ListOpenWorkflowExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of workflow information structures.</p>
   */
  executionInfos: Array<_UnmarshalledWorkflowExecutionInfo>;

  /**
   * <p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

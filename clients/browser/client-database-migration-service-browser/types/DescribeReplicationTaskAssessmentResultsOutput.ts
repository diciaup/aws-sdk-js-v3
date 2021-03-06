import { _UnmarshalledReplicationTaskAssessmentResult } from "./_ReplicationTaskAssessmentResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeReplicationTaskAssessmentResultsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>- The Amazon S3 bucket where the task assessment report is located. </p>
   */
  BucketName?: string;

  /**
   * <p> The task assessment report. </p>
   */
  ReplicationTaskAssessmentResults?: Array<
    _UnmarshalledReplicationTaskAssessmentResult
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

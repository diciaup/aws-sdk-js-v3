import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure used to request details about a project. </p>
 */
export interface DescribeProjectInput {
  /**
   * <p> Unique project identifier. </p>
   */
  projectId: string;

  /**
   * <p> If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project. </p>
   */
  syncFromResources?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

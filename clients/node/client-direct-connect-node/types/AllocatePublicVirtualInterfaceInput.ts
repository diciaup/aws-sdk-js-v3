import { _NewPublicVirtualInterfaceAllocation } from "./_NewPublicVirtualInterfaceAllocation";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AllocatePublicVirtualInterfaceInput shape
 */
export interface AllocatePublicVirtualInterfaceInput {
  /**
   * <p>The ID of the connection on which the public virtual interface is provisioned.</p>
   */
  connectionId: string;

  /**
   * <p>The ID of the AWS account that owns the public virtual interface.</p>
   */
  ownerAccount: string;

  /**
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterfaceAllocation: _NewPublicVirtualInterfaceAllocation;

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

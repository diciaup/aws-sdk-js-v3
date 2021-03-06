import { _Notification } from "./_Notification";
import { _Subscriber } from "./_Subscriber";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request of DeleteSubscriber </p>
 */
export interface DeleteSubscriberInput {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.</p>
   */
  AccountId: string;

  /**
   * <p>The name of the budget whose subscriber you want to delete.</p>
   */
  BudgetName: string;

  /**
   * <p>The notification whose subscriber you want to delete.</p>
   */
  Notification: _Notification;

  /**
   * <p>The subscriber that you want to delete.</p>
   */
  Subscriber: _Subscriber;

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

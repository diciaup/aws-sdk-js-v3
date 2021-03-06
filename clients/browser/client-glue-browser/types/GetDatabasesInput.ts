import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDatabasesInput shape
 */
export interface GetDatabasesInput {
  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   */
  MaxResults?: number;

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

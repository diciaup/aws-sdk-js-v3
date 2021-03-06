import { _UnmarshalledIntent } from "./_Intent";
import { _UnmarshalledPrompt } from "./_Prompt";
import { _UnmarshalledStatement } from "./_Statement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutBotOutput shape
 */
export interface PutBotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the bot.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>Intent</code> objects. For more information, see <a>PutBot</a>.</p>
   */
  intents?: Array<_UnmarshalledIntent>;

  /**
   * <p> The prompts that Amazon Lex uses when it doesn't understand the user's intent. For more information, see <a>PutBot</a>. </p>
   */
  clarificationPrompt?: _UnmarshalledPrompt;

  /**
   * <p>The message that Amazon Lex uses to abort a conversation. For more information, see <a>PutBot</a>.</p>
   */
  abortStatement?: _UnmarshalledStatement;

  /**
   * <p> When you send a request to create a bot with <code>processBehavior</code> set to <code>BUILD</code>, Amazon Lex sets the <code>status</code> response element to <code>BUILDING</code>. After Amazon Lex builds the bot, it sets <code>status</code> to <code>READY</code>. If Amazon Lex can't build the bot, Amazon Lex sets <code>status</code> to <code>FAILED</code>. Amazon Lex returns the reason for the failure in the <code>failureReason</code> response element. </p> <p>When you set <code>processBehavior</code>to <code>SAVE</code>, Amazon Lex sets the status code to <code>NOT BUILT</code>.</p>
   */
  status?:
    | "BUILDING"
    | "READY"
    | "READY_BASIC_TESTING"
    | "FAILED"
    | "NOT_BUILT"
    | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to build the bot.</p>
   */
  failureReason?: string;

  /**
   * <p>The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The maximum length of time that Amazon Lex retains the data gathered in a conversation. For more information, see <a>PutBot</a>.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see <a>PutBot</a>.</p>
   */
  voiceId?: string;

  /**
   * <p>Checksum of the bot that you created.</p>
   */
  checksum?: string;

  /**
   * <p>The version of the bot. For a new bot, the version is always <code>$LATEST</code>.</p>
   */
  version?: string;

  /**
   * <p> The target locale for the bot. </p>
   */
  locale?: "en-US" | "en-GB" | "de-DE" | string;

  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>
   */
  childDirected?: boolean;

  /**
   * _Boolean shape
   */
  createVersion?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

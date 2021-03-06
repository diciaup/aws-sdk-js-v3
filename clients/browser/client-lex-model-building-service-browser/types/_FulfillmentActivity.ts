import { _CodeHook, _UnmarshalledCodeHook } from "./_CodeHook";

/**
 * <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
 */
export interface _FulfillmentActivity {
  /**
   * <p> How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application. </p>
   */
  type: "ReturnIntent" | "CodeHook" | string;

  /**
   * <p> A description of the Lambda function that is run to fulfill the intent. </p>
   */
  codeHook?: _CodeHook;
}

export interface _UnmarshalledFulfillmentActivity extends _FulfillmentActivity {
  /**
   * <p> A description of the Lambda function that is run to fulfill the intent. </p>
   */
  codeHook?: _UnmarshalledCodeHook;
}

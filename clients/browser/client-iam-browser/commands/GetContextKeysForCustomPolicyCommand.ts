import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetContextKeysForCustomPolicy } from "../model/operations/GetContextKeysForCustomPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContextKeysForCustomPolicyInput } from "../types/GetContextKeysForCustomPolicyInput";
import { GetContextKeysForCustomPolicyOutput } from "../types/GetContextKeysForCustomPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetContextKeysForCustomPolicyInput";
export * from "../types/GetContextKeysForCustomPolicyOutput";
export * from "../types/GetContextKeysForCustomPolicyExceptionsUnion";

export class GetContextKeysForCustomPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContextKeysForCustomPolicyInput,
      OutputTypesUnion,
      GetContextKeysForCustomPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetContextKeysForCustomPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContextKeysForCustomPolicyInput,
    GetContextKeysForCustomPolicyOutput,
    Blob
  >();

  constructor(readonly input: GetContextKeysForCustomPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetContextKeysForCustomPolicyInput,
    GetContextKeysForCustomPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetContextKeysForCustomPolicyInput,
        GetContextKeysForCustomPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

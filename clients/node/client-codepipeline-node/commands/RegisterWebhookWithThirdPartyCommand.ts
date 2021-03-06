import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterWebhookWithThirdParty } from "../model/operations/RegisterWebhookWithThirdParty";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterWebhookWithThirdPartyInput } from "../types/RegisterWebhookWithThirdPartyInput";
import { RegisterWebhookWithThirdPartyOutput } from "../types/RegisterWebhookWithThirdPartyOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/RegisterWebhookWithThirdPartyInput";
export * from "../types/RegisterWebhookWithThirdPartyOutput";
export * from "../types/RegisterWebhookWithThirdPartyExceptionsUnion";

export class RegisterWebhookWithThirdPartyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterWebhookWithThirdPartyInput,
      OutputTypesUnion,
      RegisterWebhookWithThirdPartyOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterWebhookWithThirdParty;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterWebhookWithThirdPartyInput,
    RegisterWebhookWithThirdPartyOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterWebhookWithThirdPartyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterWebhookWithThirdPartyInput,
    RegisterWebhookWithThirdPartyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterWebhookWithThirdPartyInput,
        RegisterWebhookWithThirdPartyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

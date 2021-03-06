import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateApiKey } from "../model/operations/CreateApiKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApiKeyInput } from "../types/CreateApiKeyInput";
import { CreateApiKeyOutput } from "../types/CreateApiKeyOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateApiKeyInput";
export * from "../types/CreateApiKeyOutput";
export * from "../types/CreateApiKeyExceptionsUnion";

export class CreateApiKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApiKeyInput,
      OutputTypesUnion,
      CreateApiKeyOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateApiKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApiKeyInput,
    CreateApiKeyOutput,
    Blob
  >();

  constructor(readonly input: CreateApiKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateApiKeyInput, CreateApiKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApiKeyInput, CreateApiKeyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateApplication } from "../model/operations/CreateApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApplicationInput } from "../types/CreateApplicationInput";
import { CreateApplicationOutput } from "../types/CreateApplicationOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/CreateApplicationInput";
export * from "../types/CreateApplicationOutput";
export * from "../types/CreateApplicationExceptionsUnion";

export class CreateApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApplicationInput,
      OutputTypesUnion,
      CreateApplicationOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Blob
    > {
  readonly model = CreateApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApplicationInput,
    CreateApplicationOutput,
    Blob
  >();

  constructor(readonly input: CreateApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateApplicationInput, CreateApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApplicationInput, CreateApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

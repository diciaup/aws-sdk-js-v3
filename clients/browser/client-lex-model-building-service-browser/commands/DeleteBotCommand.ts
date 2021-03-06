import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBot } from "../model/operations/DeleteBot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBotInput } from "../types/DeleteBotInput";
import { DeleteBotOutput } from "../types/DeleteBotOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteBotInput";
export * from "../types/DeleteBotOutput";
export * from "../types/DeleteBotExceptionsUnion";

export class DeleteBotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBotInput,
      OutputTypesUnion,
      DeleteBotOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBotInput,
    DeleteBotOutput,
    Blob
  >();

  constructor(readonly input: DeleteBotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBotInput, DeleteBotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBotInput, DeleteBotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

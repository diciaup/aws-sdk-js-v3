import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAlias } from "../model/operations/DeleteAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAliasInput } from "../types/DeleteAliasInput";
import { DeleteAliasOutput } from "../types/DeleteAliasOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/DeleteAliasInput";
export * from "../types/DeleteAliasOutput";
export * from "../types/DeleteAliasExceptionsUnion";

export class DeleteAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAliasInput,
      OutputTypesUnion,
      DeleteAliasOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAliasInput,
    DeleteAliasOutput,
    Blob
  >();

  constructor(readonly input: DeleteAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAliasInput, DeleteAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAliasInput, DeleteAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

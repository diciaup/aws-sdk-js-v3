import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTypes } from "../model/operations/ListTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTypesInput } from "../types/ListTypesInput";
import { ListTypesOutput } from "../types/ListTypesOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListTypesInput";
export * from "../types/ListTypesOutput";
export * from "../types/ListTypesExceptionsUnion";

export class ListTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTypesInput,
      OutputTypesUnion,
      ListTypesOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = ListTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTypesInput,
    ListTypesOutput,
    Blob
  >();

  constructor(readonly input: ListTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTypesInput, ListTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTypesInput, ListTypesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

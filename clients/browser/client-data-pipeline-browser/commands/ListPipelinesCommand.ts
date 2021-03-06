import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPipelines } from "../model/operations/ListPipelines";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPipelinesInput } from "../types/ListPipelinesInput";
import { ListPipelinesOutput } from "../types/ListPipelinesOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/ListPipelinesInput";
export * from "../types/ListPipelinesOutput";
export * from "../types/ListPipelinesExceptionsUnion";

export class ListPipelinesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPipelinesInput,
      OutputTypesUnion,
      ListPipelinesOutput,
      DataPipelineResolvedConfiguration,
      Blob
    > {
  readonly model = ListPipelines;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPipelinesInput,
    ListPipelinesOutput,
    Blob
  >();

  constructor(readonly input: ListPipelinesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPipelinesInput, ListPipelinesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPipelinesInput, ListPipelinesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

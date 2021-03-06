import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDataSources } from "../model/operations/ListDataSources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDataSourcesInput } from "../types/ListDataSourcesInput";
import { ListDataSourcesOutput } from "../types/ListDataSourcesOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListDataSourcesInput";
export * from "../types/ListDataSourcesOutput";
export * from "../types/ListDataSourcesExceptionsUnion";

export class ListDataSourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDataSourcesInput,
      OutputTypesUnion,
      ListDataSourcesOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDataSources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDataSourcesInput,
    ListDataSourcesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDataSourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDataSourcesInput, ListDataSourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDataSourcesInput, ListDataSourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

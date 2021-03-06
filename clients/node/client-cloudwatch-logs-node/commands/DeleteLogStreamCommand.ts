import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLogStream } from "../model/operations/DeleteLogStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLogStreamInput } from "../types/DeleteLogStreamInput";
import { DeleteLogStreamOutput } from "../types/DeleteLogStreamOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DeleteLogStreamInput";
export * from "../types/DeleteLogStreamOutput";
export * from "../types/DeleteLogStreamExceptionsUnion";

export class DeleteLogStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLogStreamInput,
      OutputTypesUnion,
      DeleteLogStreamOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLogStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLogStreamInput,
    DeleteLogStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLogStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLogStreamInput, DeleteLogStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLogStreamInput, DeleteLogStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelExportTask } from "../model/operations/CancelExportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelExportTaskInput } from "../types/CancelExportTaskInput";
import { CancelExportTaskOutput } from "../types/CancelExportTaskOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/CancelExportTaskInput";
export * from "../types/CancelExportTaskOutput";
export * from "../types/CancelExportTaskExceptionsUnion";

export class CancelExportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelExportTaskInput,
      OutputTypesUnion,
      CancelExportTaskOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = CancelExportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelExportTaskInput,
    CancelExportTaskOutput,
    Blob
  >();

  constructor(readonly input: CancelExportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelExportTaskInput, CancelExportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelExportTaskInput, CancelExportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

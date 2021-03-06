import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopQueryExecution } from "../model/operations/StopQueryExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopQueryExecutionInput } from "../types/StopQueryExecutionInput";
import { StopQueryExecutionOutput } from "../types/StopQueryExecutionOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/StopQueryExecutionInput";
export * from "../types/StopQueryExecutionOutput";
export * from "../types/StopQueryExecutionExceptionsUnion";

export class StopQueryExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopQueryExecutionInput,
      OutputTypesUnion,
      StopQueryExecutionOutput,
      AthenaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopQueryExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopQueryExecutionInput,
    StopQueryExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopQueryExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopQueryExecutionInput,
    StopQueryExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopQueryExecutionInput, StopQueryExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

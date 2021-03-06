import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopNotebookInstance } from "../model/operations/StopNotebookInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopNotebookInstanceInput } from "../types/StopNotebookInstanceInput";
import { StopNotebookInstanceOutput } from "../types/StopNotebookInstanceOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StopNotebookInstanceInput";
export * from "../types/StopNotebookInstanceOutput";
export * from "../types/StopNotebookInstanceExceptionsUnion";

export class StopNotebookInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopNotebookInstanceInput,
      OutputTypesUnion,
      StopNotebookInstanceOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopNotebookInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopNotebookInstanceInput,
    StopNotebookInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopNotebookInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopNotebookInstanceInput,
    StopNotebookInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopNotebookInstanceInput, StopNotebookInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

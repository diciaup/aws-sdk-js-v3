import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartStreamProcessor } from "../model/operations/StartStreamProcessor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartStreamProcessorInput } from "../types/StartStreamProcessorInput";
import { StartStreamProcessorOutput } from "../types/StartStreamProcessorOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartStreamProcessorInput";
export * from "../types/StartStreamProcessorOutput";
export * from "../types/StartStreamProcessorExceptionsUnion";

export class StartStreamProcessorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartStreamProcessorInput,
      OutputTypesUnion,
      StartStreamProcessorOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = StartStreamProcessor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartStreamProcessorInput,
    StartStreamProcessorOutput,
    Blob
  >();

  constructor(readonly input: StartStreamProcessorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartStreamProcessorInput,
    StartStreamProcessorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartStreamProcessorInput, StartStreamProcessorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

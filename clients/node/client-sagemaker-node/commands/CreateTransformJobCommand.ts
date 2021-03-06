import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTransformJob } from "../model/operations/CreateTransformJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTransformJobInput } from "../types/CreateTransformJobInput";
import { CreateTransformJobOutput } from "../types/CreateTransformJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateTransformJobInput";
export * from "../types/CreateTransformJobOutput";
export * from "../types/CreateTransformJobExceptionsUnion";

export class CreateTransformJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTransformJobInput,
      OutputTypesUnion,
      CreateTransformJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTransformJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransformJobInput,
    CreateTransformJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTransformJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTransformJobInput,
    CreateTransformJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTransformJobInput, CreateTransformJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

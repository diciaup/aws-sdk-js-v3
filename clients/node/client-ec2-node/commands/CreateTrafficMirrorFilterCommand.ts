import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTrafficMirrorFilter } from "../model/operations/CreateTrafficMirrorFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrafficMirrorFilterInput } from "../types/CreateTrafficMirrorFilterInput";
import { CreateTrafficMirrorFilterOutput } from "../types/CreateTrafficMirrorFilterOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTrafficMirrorFilterInput";
export * from "../types/CreateTrafficMirrorFilterOutput";
export * from "../types/CreateTrafficMirrorFilterExceptionsUnion";

export class CreateTrafficMirrorFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrafficMirrorFilterInput,
      OutputTypesUnion,
      CreateTrafficMirrorFilterOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTrafficMirrorFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficMirrorFilterInput,
    CreateTrafficMirrorFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTrafficMirrorFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTrafficMirrorFilterInput,
    CreateTrafficMirrorFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrafficMirrorFilterInput, CreateTrafficMirrorFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

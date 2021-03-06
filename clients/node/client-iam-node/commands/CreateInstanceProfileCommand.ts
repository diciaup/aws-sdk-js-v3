import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateInstanceProfile } from "../model/operations/CreateInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInstanceProfileInput } from "../types/CreateInstanceProfileInput";
import { CreateInstanceProfileOutput } from "../types/CreateInstanceProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateInstanceProfileInput";
export * from "../types/CreateInstanceProfileOutput";
export * from "../types/CreateInstanceProfileExceptionsUnion";

export class CreateInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInstanceProfileInput,
      OutputTypesUnion,
      CreateInstanceProfileOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInstanceProfileInput,
    CreateInstanceProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInstanceProfileInput,
    CreateInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInstanceProfileInput, CreateInstanceProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

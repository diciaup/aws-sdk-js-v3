import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEmailIdentity } from "../model/operations/CreateEmailIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEmailIdentityInput } from "../types/CreateEmailIdentityInput";
import { CreateEmailIdentityOutput } from "../types/CreateEmailIdentityOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/CreateEmailIdentityInput";
export * from "../types/CreateEmailIdentityOutput";
export * from "../types/CreateEmailIdentityExceptionsUnion";

export class CreateEmailIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEmailIdentityInput,
      OutputTypesUnion,
      CreateEmailIdentityOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateEmailIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEmailIdentityInput,
    CreateEmailIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateEmailIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEmailIdentityInput,
    CreateEmailIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEmailIdentityInput, CreateEmailIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

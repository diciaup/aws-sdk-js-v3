import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEmailIdentity } from "../model/operations/DeleteEmailIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEmailIdentityInput } from "../types/DeleteEmailIdentityInput";
import { DeleteEmailIdentityOutput } from "../types/DeleteEmailIdentityOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/DeleteEmailIdentityInput";
export * from "../types/DeleteEmailIdentityOutput";
export * from "../types/DeleteEmailIdentityExceptionsUnion";

export class DeleteEmailIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEmailIdentityInput,
      OutputTypesUnion,
      DeleteEmailIdentityOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEmailIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEmailIdentityInput,
    DeleteEmailIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEmailIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEmailIdentityInput,
    DeleteEmailIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEmailIdentityInput, DeleteEmailIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

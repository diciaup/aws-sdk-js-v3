import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveRoleFromInstanceProfile } from "../model/operations/RemoveRoleFromInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveRoleFromInstanceProfileInput } from "../types/RemoveRoleFromInstanceProfileInput";
import { RemoveRoleFromInstanceProfileOutput } from "../types/RemoveRoleFromInstanceProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/RemoveRoleFromInstanceProfileInput";
export * from "../types/RemoveRoleFromInstanceProfileOutput";
export * from "../types/RemoveRoleFromInstanceProfileExceptionsUnion";

export class RemoveRoleFromInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveRoleFromInstanceProfileInput,
      OutputTypesUnion,
      RemoveRoleFromInstanceProfileOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveRoleFromInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveRoleFromInstanceProfileInput,
    RemoveRoleFromInstanceProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveRoleFromInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveRoleFromInstanceProfileInput,
    RemoveRoleFromInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveRoleFromInstanceProfileInput,
        RemoveRoleFromInstanceProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

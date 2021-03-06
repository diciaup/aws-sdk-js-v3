import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyIdentityIdFormat } from "../model/operations/ModifyIdentityIdFormat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyIdentityIdFormatInput } from "../types/ModifyIdentityIdFormatInput";
import { ModifyIdentityIdFormatOutput } from "../types/ModifyIdentityIdFormatOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyIdentityIdFormatInput";
export * from "../types/ModifyIdentityIdFormatOutput";
export * from "../types/ModifyIdentityIdFormatExceptionsUnion";

export class ModifyIdentityIdFormatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyIdentityIdFormatInput,
      OutputTypesUnion,
      ModifyIdentityIdFormatOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyIdentityIdFormat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyIdentityIdFormatInput,
    ModifyIdentityIdFormatOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyIdentityIdFormatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyIdentityIdFormatInput,
    ModifyIdentityIdFormatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyIdentityIdFormatInput, ModifyIdentityIdFormatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

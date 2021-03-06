import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePatchBaseline } from "../model/operations/UpdatePatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePatchBaselineInput } from "../types/UpdatePatchBaselineInput";
import { UpdatePatchBaselineOutput } from "../types/UpdatePatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdatePatchBaselineInput";
export * from "../types/UpdatePatchBaselineOutput";
export * from "../types/UpdatePatchBaselineExceptionsUnion";

export class UpdatePatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePatchBaselineInput,
      OutputTypesUnion,
      UpdatePatchBaselineOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePatchBaselineInput,
    UpdatePatchBaselineOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePatchBaselineInput,
    UpdatePatchBaselineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePatchBaselineInput, UpdatePatchBaselineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterPatchBaselineForPatchGroup } from "../model/operations/DeregisterPatchBaselineForPatchGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterPatchBaselineForPatchGroupInput } from "../types/DeregisterPatchBaselineForPatchGroupInput";
import { DeregisterPatchBaselineForPatchGroupOutput } from "../types/DeregisterPatchBaselineForPatchGroupOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeregisterPatchBaselineForPatchGroupInput";
export * from "../types/DeregisterPatchBaselineForPatchGroupOutput";
export * from "../types/DeregisterPatchBaselineForPatchGroupExceptionsUnion";

export class DeregisterPatchBaselineForPatchGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterPatchBaselineForPatchGroupInput,
      OutputTypesUnion,
      DeregisterPatchBaselineForPatchGroupOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterPatchBaselineForPatchGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterPatchBaselineForPatchGroupInput,
    DeregisterPatchBaselineForPatchGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterPatchBaselineForPatchGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterPatchBaselineForPatchGroupInput,
    DeregisterPatchBaselineForPatchGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterPatchBaselineForPatchGroupInput,
        DeregisterPatchBaselineForPatchGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

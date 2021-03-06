import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLifecycleHooks } from "../model/operations/DescribeLifecycleHooks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLifecycleHooksInput } from "../types/DescribeLifecycleHooksInput";
import { DescribeLifecycleHooksOutput } from "../types/DescribeLifecycleHooksOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeLifecycleHooksInput";
export * from "../types/DescribeLifecycleHooksOutput";
export * from "../types/DescribeLifecycleHooksExceptionsUnion";

export class DescribeLifecycleHooksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLifecycleHooksInput,
      OutputTypesUnion,
      DescribeLifecycleHooksOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLifecycleHooks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLifecycleHooksInput,
    DescribeLifecycleHooksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLifecycleHooksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLifecycleHooksInput,
    DescribeLifecycleHooksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLifecycleHooksInput, DescribeLifecycleHooksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAutoScalingGroups } from "../model/operations/DescribeAutoScalingGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAutoScalingGroupsInput } from "../types/DescribeAutoScalingGroupsInput";
import { DescribeAutoScalingGroupsOutput } from "../types/DescribeAutoScalingGroupsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeAutoScalingGroupsInput";
export * from "../types/DescribeAutoScalingGroupsOutput";
export * from "../types/DescribeAutoScalingGroupsExceptionsUnion";

export class DescribeAutoScalingGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAutoScalingGroupsInput,
      OutputTypesUnion,
      DescribeAutoScalingGroupsOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAutoScalingGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAutoScalingGroupsInput,
    DescribeAutoScalingGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAutoScalingGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAutoScalingGroupsInput,
    DescribeAutoScalingGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAutoScalingGroupsInput, DescribeAutoScalingGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

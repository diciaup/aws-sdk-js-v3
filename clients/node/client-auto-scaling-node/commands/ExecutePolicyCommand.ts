import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExecutePolicy } from "../model/operations/ExecutePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecutePolicyInput } from "../types/ExecutePolicyInput";
import { ExecutePolicyOutput } from "../types/ExecutePolicyOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/ExecutePolicyInput";
export * from "../types/ExecutePolicyOutput";
export * from "../types/ExecutePolicyExceptionsUnion";

export class ExecutePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecutePolicyInput,
      OutputTypesUnion,
      ExecutePolicyOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExecutePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecutePolicyInput,
    ExecutePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExecutePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<ExecutePolicyInput, ExecutePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExecutePolicyInput, ExecutePolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

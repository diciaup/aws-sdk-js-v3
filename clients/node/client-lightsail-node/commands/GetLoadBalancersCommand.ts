import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLoadBalancers } from "../model/operations/GetLoadBalancers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoadBalancersInput } from "../types/GetLoadBalancersInput";
import { GetLoadBalancersOutput } from "../types/GetLoadBalancersOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetLoadBalancersInput";
export * from "../types/GetLoadBalancersOutput";
export * from "../types/GetLoadBalancersExceptionsUnion";

export class GetLoadBalancersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoadBalancersInput,
      OutputTypesUnion,
      GetLoadBalancersOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLoadBalancers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoadBalancersInput,
    GetLoadBalancersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLoadBalancersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLoadBalancersInput, GetLoadBalancersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoadBalancersInput, GetLoadBalancersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

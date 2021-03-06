import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetLoadBalancerListenerSSLCertificate } from "../model/operations/SetLoadBalancerListenerSSLCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetLoadBalancerListenerSSLCertificateInput } from "../types/SetLoadBalancerListenerSSLCertificateInput";
import { SetLoadBalancerListenerSSLCertificateOutput } from "../types/SetLoadBalancerListenerSSLCertificateOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/SetLoadBalancerListenerSSLCertificateInput";
export * from "../types/SetLoadBalancerListenerSSLCertificateOutput";
export * from "../types/SetLoadBalancerListenerSSLCertificateExceptionsUnion";

export class SetLoadBalancerListenerSSLCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetLoadBalancerListenerSSLCertificateInput,
      OutputTypesUnion,
      SetLoadBalancerListenerSSLCertificateOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = SetLoadBalancerListenerSSLCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetLoadBalancerListenerSSLCertificateInput,
    SetLoadBalancerListenerSSLCertificateOutput,
    Blob
  >();

  constructor(readonly input: SetLoadBalancerListenerSSLCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetLoadBalancerListenerSSLCertificateInput,
    SetLoadBalancerListenerSSLCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetLoadBalancerListenerSSLCertificateInput,
        SetLoadBalancerListenerSSLCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

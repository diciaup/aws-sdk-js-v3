import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePublicDnsNamespace } from "../model/operations/CreatePublicDnsNamespace";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePublicDnsNamespaceInput } from "../types/CreatePublicDnsNamespaceInput";
import { CreatePublicDnsNamespaceOutput } from "../types/CreatePublicDnsNamespaceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/CreatePublicDnsNamespaceInput";
export * from "../types/CreatePublicDnsNamespaceOutput";
export * from "../types/CreatePublicDnsNamespaceExceptionsUnion";

export class CreatePublicDnsNamespaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePublicDnsNamespaceInput,
      OutputTypesUnion,
      CreatePublicDnsNamespaceOutput,
      ServiceDiscoveryResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePublicDnsNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePublicDnsNamespaceInput,
    CreatePublicDnsNamespaceOutput,
    Blob
  >();

  constructor(readonly input: CreatePublicDnsNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePublicDnsNamespaceInput,
    CreatePublicDnsNamespaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePublicDnsNamespaceInput, CreatePublicDnsNamespaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

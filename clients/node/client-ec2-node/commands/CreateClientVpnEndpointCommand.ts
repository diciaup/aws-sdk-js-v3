import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateClientVpnEndpoint } from "../model/operations/CreateClientVpnEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClientVpnEndpointInput } from "../types/CreateClientVpnEndpointInput";
import { CreateClientVpnEndpointOutput } from "../types/CreateClientVpnEndpointOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateClientVpnEndpointInput";
export * from "../types/CreateClientVpnEndpointOutput";
export * from "../types/CreateClientVpnEndpointExceptionsUnion";

export class CreateClientVpnEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClientVpnEndpointInput,
      OutputTypesUnion,
      CreateClientVpnEndpointOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateClientVpnEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClientVpnEndpointInput,
    CreateClientVpnEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateClientVpnEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateClientVpnEndpointInput,
    CreateClientVpnEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateClientVpnEndpointInput, CreateClientVpnEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachInternetGateway } from "../model/operations/AttachInternetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachInternetGatewayInput } from "../types/AttachInternetGatewayInput";
import { AttachInternetGatewayOutput } from "../types/AttachInternetGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AttachInternetGatewayInput";
export * from "../types/AttachInternetGatewayOutput";
export * from "../types/AttachInternetGatewayExceptionsUnion";

export class AttachInternetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachInternetGatewayInput,
      OutputTypesUnion,
      AttachInternetGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachInternetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachInternetGatewayInput,
    AttachInternetGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachInternetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachInternetGatewayInput,
    AttachInternetGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachInternetGatewayInput, AttachInternetGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePrivateVirtualInterface } from "../model/operations/CreatePrivateVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePrivateVirtualInterfaceInput } from "../types/CreatePrivateVirtualInterfaceInput";
import { CreatePrivateVirtualInterfaceOutput } from "../types/CreatePrivateVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreatePrivateVirtualInterfaceInput";
export * from "../types/CreatePrivateVirtualInterfaceOutput";
export * from "../types/CreatePrivateVirtualInterfaceExceptionsUnion";

export class CreatePrivateVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePrivateVirtualInterfaceInput,
      OutputTypesUnion,
      CreatePrivateVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePrivateVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePrivateVirtualInterfaceInput,
    CreatePrivateVirtualInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePrivateVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePrivateVirtualInterfaceInput,
    CreatePrivateVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreatePrivateVirtualInterfaceInput,
        CreatePrivateVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

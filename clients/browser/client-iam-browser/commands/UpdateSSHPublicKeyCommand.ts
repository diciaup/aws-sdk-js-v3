import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSSHPublicKey } from "../model/operations/UpdateSSHPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSSHPublicKeyInput } from "../types/UpdateSSHPublicKeyInput";
import { UpdateSSHPublicKeyOutput } from "../types/UpdateSSHPublicKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateSSHPublicKeyInput";
export * from "../types/UpdateSSHPublicKeyOutput";
export * from "../types/UpdateSSHPublicKeyExceptionsUnion";

export class UpdateSSHPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSSHPublicKeyInput,
      OutputTypesUnion,
      UpdateSSHPublicKeyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSSHPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSSHPublicKeyInput,
    UpdateSSHPublicKeyOutput,
    Blob
  >();

  constructor(readonly input: UpdateSSHPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSSHPublicKeyInput,
    UpdateSSHPublicKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSSHPublicKeyInput, UpdateSSHPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

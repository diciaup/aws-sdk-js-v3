import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddWorkingStorage } from "../model/operations/AddWorkingStorage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddWorkingStorageInput } from "../types/AddWorkingStorageInput";
import { AddWorkingStorageOutput } from "../types/AddWorkingStorageOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/AddWorkingStorageInput";
export * from "../types/AddWorkingStorageOutput";
export * from "../types/AddWorkingStorageExceptionsUnion";

export class AddWorkingStorageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddWorkingStorageInput,
      OutputTypesUnion,
      AddWorkingStorageOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddWorkingStorage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddWorkingStorageInput,
    AddWorkingStorageOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddWorkingStorageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<AddWorkingStorageInput, AddWorkingStorageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddWorkingStorageInput, AddWorkingStorageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

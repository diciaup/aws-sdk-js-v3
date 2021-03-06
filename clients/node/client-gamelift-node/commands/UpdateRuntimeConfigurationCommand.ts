import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRuntimeConfiguration } from "../model/operations/UpdateRuntimeConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRuntimeConfigurationInput } from "../types/UpdateRuntimeConfigurationInput";
import { UpdateRuntimeConfigurationOutput } from "../types/UpdateRuntimeConfigurationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateRuntimeConfigurationInput";
export * from "../types/UpdateRuntimeConfigurationOutput";
export * from "../types/UpdateRuntimeConfigurationExceptionsUnion";

export class UpdateRuntimeConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRuntimeConfigurationInput,
      OutputTypesUnion,
      UpdateRuntimeConfigurationOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRuntimeConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRuntimeConfigurationInput,
    UpdateRuntimeConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRuntimeConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRuntimeConfigurationInput,
    UpdateRuntimeConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateRuntimeConfigurationInput,
        UpdateRuntimeConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

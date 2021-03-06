import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { NotifyApplicationState } from "../model/operations/NotifyApplicationState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { NotifyApplicationStateInput } from "../types/NotifyApplicationStateInput";
import { NotifyApplicationStateOutput } from "../types/NotifyApplicationStateOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/NotifyApplicationStateInput";
export * from "../types/NotifyApplicationStateOutput";
export * from "../types/NotifyApplicationStateExceptionsUnion";

export class NotifyApplicationStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      NotifyApplicationStateInput,
      OutputTypesUnion,
      NotifyApplicationStateOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = NotifyApplicationState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    NotifyApplicationStateInput,
    NotifyApplicationStateOutput,
    _stream.Readable
  >();

  constructor(readonly input: NotifyApplicationStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    NotifyApplicationStateInput,
    NotifyApplicationStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<NotifyApplicationStateInput, NotifyApplicationStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

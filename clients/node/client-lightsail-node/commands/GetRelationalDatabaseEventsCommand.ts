import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRelationalDatabaseEvents } from "../model/operations/GetRelationalDatabaseEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseEventsInput } from "../types/GetRelationalDatabaseEventsInput";
import { GetRelationalDatabaseEventsOutput } from "../types/GetRelationalDatabaseEventsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseEventsInput";
export * from "../types/GetRelationalDatabaseEventsOutput";
export * from "../types/GetRelationalDatabaseEventsExceptionsUnion";

export class GetRelationalDatabaseEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseEventsInput,
      OutputTypesUnion,
      GetRelationalDatabaseEventsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRelationalDatabaseEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseEventsInput,
    GetRelationalDatabaseEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRelationalDatabaseEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseEventsInput,
    GetRelationalDatabaseEventsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseEventsInput,
        GetRelationalDatabaseEventsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetCognitoEvents } from "../model/operations/SetCognitoEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetCognitoEventsInput } from "../types/SetCognitoEventsInput";
import { SetCognitoEventsOutput } from "../types/SetCognitoEventsOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/SetCognitoEventsInput";
export * from "../types/SetCognitoEventsOutput";
export * from "../types/SetCognitoEventsExceptionsUnion";

export class SetCognitoEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetCognitoEventsInput,
      OutputTypesUnion,
      SetCognitoEventsOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = SetCognitoEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetCognitoEventsInput,
    SetCognitoEventsOutput,
    Blob
  >();

  constructor(readonly input: SetCognitoEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<SetCognitoEventsInput, SetCognitoEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetCognitoEventsInput, SetCognitoEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

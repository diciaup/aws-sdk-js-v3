import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInstances } from "../model/operations/ListInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInstancesInput } from "../types/ListInstancesInput";
import { ListInstancesOutput } from "../types/ListInstancesOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ListInstancesInput";
export * from "../types/ListInstancesOutput";
export * from "../types/ListInstancesExceptionsUnion";

export class ListInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInstancesInput,
      OutputTypesUnion,
      ListInstancesOutput,
      EMRResolvedConfiguration,
      Blob
    > {
  readonly model = ListInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInstancesInput,
    ListInstancesOutput,
    Blob
  >();

  constructor(readonly input: ListInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<ListInstancesInput, ListInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInstancesInput, ListInstancesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

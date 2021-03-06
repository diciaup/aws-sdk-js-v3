import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCoreDefinitionVersions } from "../model/operations/ListCoreDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCoreDefinitionVersionsInput } from "../types/ListCoreDefinitionVersionsInput";
import { ListCoreDefinitionVersionsOutput } from "../types/ListCoreDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListCoreDefinitionVersionsInput";
export * from "../types/ListCoreDefinitionVersionsOutput";
export * from "../types/ListCoreDefinitionVersionsExceptionsUnion";

export class ListCoreDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCoreDefinitionVersionsInput,
      OutputTypesUnion,
      ListCoreDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListCoreDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCoreDefinitionVersionsInput,
    ListCoreDefinitionVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListCoreDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCoreDefinitionVersionsInput,
    ListCoreDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListCoreDefinitionVersionsInput,
        ListCoreDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

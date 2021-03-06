import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBuildsForProject } from "../model/operations/ListBuildsForProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBuildsForProjectInput } from "../types/ListBuildsForProjectInput";
import { ListBuildsForProjectOutput } from "../types/ListBuildsForProjectOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/ListBuildsForProjectInput";
export * from "../types/ListBuildsForProjectOutput";
export * from "../types/ListBuildsForProjectExceptionsUnion";

export class ListBuildsForProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBuildsForProjectInput,
      OutputTypesUnion,
      ListBuildsForProjectOutput,
      CodeBuildResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBuildsForProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBuildsForProjectInput,
    ListBuildsForProjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBuildsForProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBuildsForProjectInput,
    ListBuildsForProjectOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBuildsForProjectInput, ListBuildsForProjectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

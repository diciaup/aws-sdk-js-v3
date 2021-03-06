import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCuratedEnvironmentImages } from "../model/operations/ListCuratedEnvironmentImages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCuratedEnvironmentImagesInput } from "../types/ListCuratedEnvironmentImagesInput";
import { ListCuratedEnvironmentImagesOutput } from "../types/ListCuratedEnvironmentImagesOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/ListCuratedEnvironmentImagesInput";
export * from "../types/ListCuratedEnvironmentImagesOutput";
export * from "../types/ListCuratedEnvironmentImagesExceptionsUnion";

export class ListCuratedEnvironmentImagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCuratedEnvironmentImagesInput,
      OutputTypesUnion,
      ListCuratedEnvironmentImagesOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = ListCuratedEnvironmentImages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCuratedEnvironmentImagesInput,
    ListCuratedEnvironmentImagesOutput,
    Blob
  >();

  constructor(readonly input: ListCuratedEnvironmentImagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCuratedEnvironmentImagesInput,
    ListCuratedEnvironmentImagesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListCuratedEnvironmentImagesInput,
        ListCuratedEnvironmentImagesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

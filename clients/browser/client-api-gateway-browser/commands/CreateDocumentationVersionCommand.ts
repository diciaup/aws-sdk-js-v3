import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDocumentationVersion } from "../model/operations/CreateDocumentationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDocumentationVersionInput } from "../types/CreateDocumentationVersionInput";
import { CreateDocumentationVersionOutput } from "../types/CreateDocumentationVersionOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateDocumentationVersionInput";
export * from "../types/CreateDocumentationVersionOutput";
export * from "../types/CreateDocumentationVersionExceptionsUnion";

export class CreateDocumentationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDocumentationVersionInput,
      OutputTypesUnion,
      CreateDocumentationVersionOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDocumentationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDocumentationVersionInput,
    CreateDocumentationVersionOutput,
    Blob
  >();

  constructor(readonly input: CreateDocumentationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDocumentationVersionInput,
    CreateDocumentationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDocumentationVersionInput,
        CreateDocumentationVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

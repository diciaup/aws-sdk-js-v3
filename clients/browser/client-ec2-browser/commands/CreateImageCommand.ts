import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateImage } from "../model/operations/CreateImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateImageInput } from "../types/CreateImageInput";
import { CreateImageOutput } from "../types/CreateImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateImageInput";
export * from "../types/CreateImageOutput";
export * from "../types/CreateImageExceptionsUnion";

export class CreateImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateImageInput,
      OutputTypesUnion,
      CreateImageOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateImageInput,
    CreateImageOutput,
    Blob
  >();

  constructor(readonly input: CreateImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateImageInput, CreateImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateImageInput, CreateImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

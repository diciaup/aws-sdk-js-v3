import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddTagsToResource } from "../model/operations/AddTagsToResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddTagsToResourceInput } from "../types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "../types/AddTagsToResourceOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/AddTagsToResourceInput";
export * from "../types/AddTagsToResourceOutput";
export * from "../types/AddTagsToResourceExceptionsUnion";

export class AddTagsToResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddTagsToResourceInput,
      OutputTypesUnion,
      AddTagsToResourceOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = AddTagsToResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddTagsToResourceInput,
    AddTagsToResourceOutput,
    Blob
  >();

  constructor(readonly input: AddTagsToResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<AddTagsToResourceInput, AddTagsToResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddTagsToResourceInput, AddTagsToResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

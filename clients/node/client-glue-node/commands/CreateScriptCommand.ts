import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateScript } from "../model/operations/CreateScript";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateScriptInput } from "../types/CreateScriptInput";
import { CreateScriptOutput } from "../types/CreateScriptOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateScriptInput";
export * from "../types/CreateScriptOutput";
export * from "../types/CreateScriptExceptionsUnion";

export class CreateScriptCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateScriptInput,
      OutputTypesUnion,
      CreateScriptOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateScript;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateScriptInput,
    CreateScriptOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateScriptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateScriptInput, CreateScriptOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateScriptInput, CreateScriptOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

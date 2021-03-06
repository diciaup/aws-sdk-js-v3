import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetXssMatchSet } from "../model/operations/GetXssMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetXssMatchSetInput } from "../types/GetXssMatchSetInput";
import { GetXssMatchSetOutput } from "../types/GetXssMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetXssMatchSetInput";
export * from "../types/GetXssMatchSetOutput";
export * from "../types/GetXssMatchSetExceptionsUnion";

export class GetXssMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetXssMatchSetInput,
      OutputTypesUnion,
      GetXssMatchSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetXssMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetXssMatchSetInput,
    GetXssMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetXssMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<GetXssMatchSetInput, GetXssMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetXssMatchSetInput, GetXssMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

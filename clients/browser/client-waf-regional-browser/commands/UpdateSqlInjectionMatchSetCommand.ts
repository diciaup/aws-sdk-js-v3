import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSqlInjectionMatchSet } from "../model/operations/UpdateSqlInjectionMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSqlInjectionMatchSetInput } from "../types/UpdateSqlInjectionMatchSetInput";
import { UpdateSqlInjectionMatchSetOutput } from "../types/UpdateSqlInjectionMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateSqlInjectionMatchSetInput";
export * from "../types/UpdateSqlInjectionMatchSetOutput";
export * from "../types/UpdateSqlInjectionMatchSetExceptionsUnion";

export class UpdateSqlInjectionMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSqlInjectionMatchSetInput,
      OutputTypesUnion,
      UpdateSqlInjectionMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSqlInjectionMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSqlInjectionMatchSetInput,
    UpdateSqlInjectionMatchSetOutput,
    Blob
  >();

  constructor(readonly input: UpdateSqlInjectionMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSqlInjectionMatchSetInput,
    UpdateSqlInjectionMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateSqlInjectionMatchSetInput,
        UpdateSqlInjectionMatchSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

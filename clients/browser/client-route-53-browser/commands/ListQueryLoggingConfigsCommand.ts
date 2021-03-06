import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListQueryLoggingConfigs } from "../model/operations/ListQueryLoggingConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListQueryLoggingConfigsInput } from "../types/ListQueryLoggingConfigsInput";
import { ListQueryLoggingConfigsOutput } from "../types/ListQueryLoggingConfigsOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListQueryLoggingConfigsInput";
export * from "../types/ListQueryLoggingConfigsOutput";
export * from "../types/ListQueryLoggingConfigsExceptionsUnion";

export class ListQueryLoggingConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListQueryLoggingConfigsInput,
      OutputTypesUnion,
      ListQueryLoggingConfigsOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = ListQueryLoggingConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListQueryLoggingConfigsInput,
    ListQueryLoggingConfigsOutput,
    Blob
  >();

  constructor(readonly input: ListQueryLoggingConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListQueryLoggingConfigsInput,
    ListQueryLoggingConfigsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
      {
        step: "initialize",
        priority: 0,
        tags: { NORMALIZE_ROUTE53_IDS: true }
      }
    );
    return stack.resolve(
      handler<ListQueryLoggingConfigsInput, ListQueryLoggingConfigsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRequestedServiceQuotaChangeHistory } from "../model/operations/ListRequestedServiceQuotaChangeHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRequestedServiceQuotaChangeHistoryInput } from "../types/ListRequestedServiceQuotaChangeHistoryInput";
import { ListRequestedServiceQuotaChangeHistoryOutput } from "../types/ListRequestedServiceQuotaChangeHistoryOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/ListRequestedServiceQuotaChangeHistoryInput";
export * from "../types/ListRequestedServiceQuotaChangeHistoryOutput";
export * from "../types/ListRequestedServiceQuotaChangeHistoryExceptionsUnion";

export class ListRequestedServiceQuotaChangeHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRequestedServiceQuotaChangeHistoryInput,
      OutputTypesUnion,
      ListRequestedServiceQuotaChangeHistoryOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRequestedServiceQuotaChangeHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRequestedServiceQuotaChangeHistoryInput,
    ListRequestedServiceQuotaChangeHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRequestedServiceQuotaChangeHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRequestedServiceQuotaChangeHistoryInput,
    ListRequestedServiceQuotaChangeHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListRequestedServiceQuotaChangeHistoryInput,
        ListRequestedServiceQuotaChangeHistoryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

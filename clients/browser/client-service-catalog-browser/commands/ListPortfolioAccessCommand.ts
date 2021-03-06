import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPortfolioAccess } from "../model/operations/ListPortfolioAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPortfolioAccessInput } from "../types/ListPortfolioAccessInput";
import { ListPortfolioAccessOutput } from "../types/ListPortfolioAccessOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListPortfolioAccessInput";
export * from "../types/ListPortfolioAccessOutput";
export * from "../types/ListPortfolioAccessExceptionsUnion";

export class ListPortfolioAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPortfolioAccessInput,
      OutputTypesUnion,
      ListPortfolioAccessOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListPortfolioAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPortfolioAccessInput,
    ListPortfolioAccessOutput,
    Blob
  >();

  constructor(readonly input: ListPortfolioAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPortfolioAccessInput,
    ListPortfolioAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPortfolioAccessInput, ListPortfolioAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

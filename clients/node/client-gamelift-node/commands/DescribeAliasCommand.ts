import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAlias } from "../model/operations/DescribeAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAliasInput } from "../types/DescribeAliasInput";
import { DescribeAliasOutput } from "../types/DescribeAliasOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeAliasInput";
export * from "../types/DescribeAliasOutput";
export * from "../types/DescribeAliasExceptionsUnion";

export class DescribeAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAliasInput,
      OutputTypesUnion,
      DescribeAliasOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAliasInput,
    DescribeAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAliasInput, DescribeAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAliasInput, DescribeAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

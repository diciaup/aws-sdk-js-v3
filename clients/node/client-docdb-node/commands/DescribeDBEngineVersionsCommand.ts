import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBEngineVersions } from "../model/operations/DescribeDBEngineVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBEngineVersionsInput } from "../types/DescribeDBEngineVersionsInput";
import { DescribeDBEngineVersionsOutput } from "../types/DescribeDBEngineVersionsOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DescribeDBEngineVersionsInput";
export * from "../types/DescribeDBEngineVersionsOutput";
export * from "../types/DescribeDBEngineVersionsExceptionsUnion";

export class DescribeDBEngineVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBEngineVersionsInput,
      OutputTypesUnion,
      DescribeDBEngineVersionsOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBEngineVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBEngineVersionsInput,
    DescribeDBEngineVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBEngineVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBEngineVersionsInput,
    DescribeDBEngineVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBEngineVersionsInput, DescribeDBEngineVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

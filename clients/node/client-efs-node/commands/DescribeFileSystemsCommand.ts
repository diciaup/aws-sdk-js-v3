import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFileSystems } from "../model/operations/DescribeFileSystems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFileSystemsInput } from "../types/DescribeFileSystemsInput";
import { DescribeFileSystemsOutput } from "../types/DescribeFileSystemsOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/DescribeFileSystemsInput";
export * from "../types/DescribeFileSystemsOutput";
export * from "../types/DescribeFileSystemsExceptionsUnion";

export class DescribeFileSystemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFileSystemsInput,
      OutputTypesUnion,
      DescribeFileSystemsOutput,
      EFSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFileSystems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFileSystemsInput,
    DescribeFileSystemsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFileSystemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFileSystemsInput,
    DescribeFileSystemsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFileSystemsInput, DescribeFileSystemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

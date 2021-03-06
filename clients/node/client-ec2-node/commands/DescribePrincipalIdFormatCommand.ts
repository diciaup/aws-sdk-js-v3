import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePrincipalIdFormat } from "../model/operations/DescribePrincipalIdFormat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePrincipalIdFormatInput } from "../types/DescribePrincipalIdFormatInput";
import { DescribePrincipalIdFormatOutput } from "../types/DescribePrincipalIdFormatOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribePrincipalIdFormatInput";
export * from "../types/DescribePrincipalIdFormatOutput";
export * from "../types/DescribePrincipalIdFormatExceptionsUnion";

export class DescribePrincipalIdFormatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePrincipalIdFormatInput,
      OutputTypesUnion,
      DescribePrincipalIdFormatOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePrincipalIdFormat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePrincipalIdFormatInput,
    DescribePrincipalIdFormatOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePrincipalIdFormatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePrincipalIdFormatInput,
    DescribePrincipalIdFormatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePrincipalIdFormatInput, DescribePrincipalIdFormatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

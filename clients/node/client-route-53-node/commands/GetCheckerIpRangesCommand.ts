import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCheckerIpRanges } from "../model/operations/GetCheckerIpRanges";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCheckerIpRangesInput } from "../types/GetCheckerIpRangesInput";
import { GetCheckerIpRangesOutput } from "../types/GetCheckerIpRangesOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetCheckerIpRangesInput";
export * from "../types/GetCheckerIpRangesOutput";
export * from "../types/GetCheckerIpRangesExceptionsUnion";

export class GetCheckerIpRangesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCheckerIpRangesInput,
      OutputTypesUnion,
      GetCheckerIpRangesOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCheckerIpRanges;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCheckerIpRangesInput,
    GetCheckerIpRangesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCheckerIpRangesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCheckerIpRangesInput,
    GetCheckerIpRangesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCheckerIpRangesInput, GetCheckerIpRangesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetGatewayResponses } from "../model/operations/GetGatewayResponses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGatewayResponsesInput } from "../types/GetGatewayResponsesInput";
import { GetGatewayResponsesOutput } from "../types/GetGatewayResponsesOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetGatewayResponsesInput";
export * from "../types/GetGatewayResponsesOutput";
export * from "../types/GetGatewayResponsesExceptionsUnion";

export class GetGatewayResponsesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGatewayResponsesInput,
      OutputTypesUnion,
      GetGatewayResponsesOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetGatewayResponses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGatewayResponsesInput,
    GetGatewayResponsesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetGatewayResponsesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetGatewayResponsesInput,
    GetGatewayResponsesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGatewayResponsesInput, GetGatewayResponsesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

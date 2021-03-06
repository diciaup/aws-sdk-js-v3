import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSdkType } from "../model/operations/GetSdkType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSdkTypeInput } from "../types/GetSdkTypeInput";
import { GetSdkTypeOutput } from "../types/GetSdkTypeOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetSdkTypeInput";
export * from "../types/GetSdkTypeOutput";
export * from "../types/GetSdkTypeExceptionsUnion";

export class GetSdkTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSdkTypeInput,
      OutputTypesUnion,
      GetSdkTypeOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetSdkType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSdkTypeInput,
    GetSdkTypeOutput,
    Blob
  >();

  constructor(readonly input: GetSdkTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSdkTypeInput, GetSdkTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSdkTypeInput, GetSdkTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

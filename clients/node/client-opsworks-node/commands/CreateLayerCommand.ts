import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLayer } from "../model/operations/CreateLayer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLayerInput } from "../types/CreateLayerInput";
import { CreateLayerOutput } from "../types/CreateLayerOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/CreateLayerInput";
export * from "../types/CreateLayerOutput";
export * from "../types/CreateLayerExceptionsUnion";

export class CreateLayerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLayerInput,
      OutputTypesUnion,
      CreateLayerOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLayer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLayerInput,
    CreateLayerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLayerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLayerInput, CreateLayerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLayerInput, CreateLayerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

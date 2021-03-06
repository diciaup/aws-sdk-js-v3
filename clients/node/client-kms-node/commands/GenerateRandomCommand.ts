import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GenerateRandom } from "../model/operations/GenerateRandom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateRandomInput } from "../types/GenerateRandomInput";
import { GenerateRandomOutput } from "../types/GenerateRandomOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/GenerateRandomInput";
export * from "../types/GenerateRandomOutput";
export * from "../types/GenerateRandomExceptionsUnion";

export class GenerateRandomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateRandomInput,
      OutputTypesUnion,
      GenerateRandomOutput,
      KMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GenerateRandom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateRandomInput,
    GenerateRandomOutput,
    _stream.Readable
  >();

  constructor(readonly input: GenerateRandomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<GenerateRandomInput, GenerateRandomOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GenerateRandomInput, GenerateRandomOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

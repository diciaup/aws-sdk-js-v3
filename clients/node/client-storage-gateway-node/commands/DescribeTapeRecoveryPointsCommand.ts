import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTapeRecoveryPoints } from "../model/operations/DescribeTapeRecoveryPoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTapeRecoveryPointsInput } from "../types/DescribeTapeRecoveryPointsInput";
import { DescribeTapeRecoveryPointsOutput } from "../types/DescribeTapeRecoveryPointsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeTapeRecoveryPointsInput";
export * from "../types/DescribeTapeRecoveryPointsOutput";
export * from "../types/DescribeTapeRecoveryPointsExceptionsUnion";

export class DescribeTapeRecoveryPointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTapeRecoveryPointsInput,
      OutputTypesUnion,
      DescribeTapeRecoveryPointsOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTapeRecoveryPoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTapeRecoveryPointsInput,
    DescribeTapeRecoveryPointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTapeRecoveryPointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTapeRecoveryPointsInput,
    DescribeTapeRecoveryPointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTapeRecoveryPointsInput,
        DescribeTapeRecoveryPointsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCapacityReservationUsage } from "../model/operations/GetCapacityReservationUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCapacityReservationUsageInput } from "../types/GetCapacityReservationUsageInput";
import { GetCapacityReservationUsageOutput } from "../types/GetCapacityReservationUsageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetCapacityReservationUsageInput";
export * from "../types/GetCapacityReservationUsageOutput";
export * from "../types/GetCapacityReservationUsageExceptionsUnion";

export class GetCapacityReservationUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCapacityReservationUsageInput,
      OutputTypesUnion,
      GetCapacityReservationUsageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCapacityReservationUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCapacityReservationUsageInput,
    GetCapacityReservationUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCapacityReservationUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCapacityReservationUsageInput,
    GetCapacityReservationUsageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCapacityReservationUsageInput,
        GetCapacityReservationUsageOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

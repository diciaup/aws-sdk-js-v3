import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCapacityReservations } from "../model/operations/DescribeCapacityReservations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCapacityReservationsInput } from "../types/DescribeCapacityReservationsInput";
import { DescribeCapacityReservationsOutput } from "../types/DescribeCapacityReservationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeCapacityReservationsInput";
export * from "../types/DescribeCapacityReservationsOutput";
export * from "../types/DescribeCapacityReservationsExceptionsUnion";

export class DescribeCapacityReservationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCapacityReservationsInput,
      OutputTypesUnion,
      DescribeCapacityReservationsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCapacityReservations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCapacityReservationsInput,
    DescribeCapacityReservationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeCapacityReservationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCapacityReservationsInput,
    DescribeCapacityReservationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCapacityReservationsInput,
        DescribeCapacityReservationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

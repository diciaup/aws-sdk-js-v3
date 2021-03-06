import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootDBInstance } from "../model/operations/RebootDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootDBInstanceInput } from "../types/RebootDBInstanceInput";
import { RebootDBInstanceOutput } from "../types/RebootDBInstanceOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/RebootDBInstanceInput";
export * from "../types/RebootDBInstanceOutput";
export * from "../types/RebootDBInstanceExceptionsUnion";

export class RebootDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootDBInstanceInput,
      OutputTypesUnion,
      RebootDBInstanceOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = RebootDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootDBInstanceInput,
    RebootDBInstanceOutput,
    Blob
  >();

  constructor(readonly input: RebootDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootDBInstanceInput, RebootDBInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootDBInstanceInput, RebootDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteClusterSubnetGroup } from "../model/operations/DeleteClusterSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClusterSubnetGroupInput } from "../types/DeleteClusterSubnetGroupInput";
import { DeleteClusterSubnetGroupOutput } from "../types/DeleteClusterSubnetGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteClusterSubnetGroupInput";
export * from "../types/DeleteClusterSubnetGroupOutput";
export * from "../types/DeleteClusterSubnetGroupExceptionsUnion";

export class DeleteClusterSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClusterSubnetGroupInput,
      OutputTypesUnion,
      DeleteClusterSubnetGroupOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteClusterSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClusterSubnetGroupInput,
    DeleteClusterSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteClusterSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClusterSubnetGroupInput,
    DeleteClusterSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClusterSubnetGroupInput, DeleteClusterSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

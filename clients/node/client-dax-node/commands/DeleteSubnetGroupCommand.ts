import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSubnetGroup } from "../model/operations/DeleteSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSubnetGroupInput } from "../types/DeleteSubnetGroupInput";
import { DeleteSubnetGroupOutput } from "../types/DeleteSubnetGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DeleteSubnetGroupInput";
export * from "../types/DeleteSubnetGroupOutput";
export * from "../types/DeleteSubnetGroupExceptionsUnion";

export class DeleteSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSubnetGroupInput,
      OutputTypesUnion,
      DeleteSubnetGroupOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubnetGroupInput,
    DeleteSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSubnetGroupInput, DeleteSubnetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSubnetGroupInput, DeleteSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

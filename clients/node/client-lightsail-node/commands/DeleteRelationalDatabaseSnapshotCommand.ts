import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRelationalDatabaseSnapshot } from "../model/operations/DeleteRelationalDatabaseSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRelationalDatabaseSnapshotInput } from "../types/DeleteRelationalDatabaseSnapshotInput";
import { DeleteRelationalDatabaseSnapshotOutput } from "../types/DeleteRelationalDatabaseSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteRelationalDatabaseSnapshotInput";
export * from "../types/DeleteRelationalDatabaseSnapshotOutput";
export * from "../types/DeleteRelationalDatabaseSnapshotExceptionsUnion";

export class DeleteRelationalDatabaseSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRelationalDatabaseSnapshotInput,
      OutputTypesUnion,
      DeleteRelationalDatabaseSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRelationalDatabaseSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRelationalDatabaseSnapshotInput,
    DeleteRelationalDatabaseSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRelationalDatabaseSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRelationalDatabaseSnapshotInput,
    DeleteRelationalDatabaseSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteRelationalDatabaseSnapshotInput,
        DeleteRelationalDatabaseSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateBackupPlan } from "../model/operations/CreateBackupPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBackupPlanInput } from "../types/CreateBackupPlanInput";
import { CreateBackupPlanOutput } from "../types/CreateBackupPlanOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/CreateBackupPlanInput";
export * from "../types/CreateBackupPlanOutput";
export * from "../types/CreateBackupPlanExceptionsUnion";

export class CreateBackupPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBackupPlanInput,
      OutputTypesUnion,
      CreateBackupPlanOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateBackupPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBackupPlanInput,
    CreateBackupPlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateBackupPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBackupPlanInput, CreateBackupPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBackupPlanInput, CreateBackupPlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

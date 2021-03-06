import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpgradeAppliedSchema } from "../model/operations/UpgradeAppliedSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpgradeAppliedSchemaInput } from "../types/UpgradeAppliedSchemaInput";
import { UpgradeAppliedSchemaOutput } from "../types/UpgradeAppliedSchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpgradeAppliedSchemaInput";
export * from "../types/UpgradeAppliedSchemaOutput";
export * from "../types/UpgradeAppliedSchemaExceptionsUnion";

export class UpgradeAppliedSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpgradeAppliedSchemaInput,
      OutputTypesUnion,
      UpgradeAppliedSchemaOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = UpgradeAppliedSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpgradeAppliedSchemaInput,
    UpgradeAppliedSchemaOutput,
    Blob
  >();

  constructor(readonly input: UpgradeAppliedSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpgradeAppliedSchemaInput,
    UpgradeAppliedSchemaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpgradeAppliedSchemaInput, UpgradeAppliedSchemaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

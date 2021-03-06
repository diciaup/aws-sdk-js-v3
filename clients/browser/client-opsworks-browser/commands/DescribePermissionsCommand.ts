import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePermissions } from "../model/operations/DescribePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePermissionsInput } from "../types/DescribePermissionsInput";
import { DescribePermissionsOutput } from "../types/DescribePermissionsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribePermissionsInput";
export * from "../types/DescribePermissionsOutput";
export * from "../types/DescribePermissionsExceptionsUnion";

export class DescribePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePermissionsInput,
      OutputTypesUnion,
      DescribePermissionsOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePermissionsInput,
    DescribePermissionsOutput,
    Blob
  >();

  constructor(readonly input: DescribePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePermissionsInput,
    DescribePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePermissionsInput, DescribePermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

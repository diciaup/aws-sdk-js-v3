import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUserProfiles } from "../model/operations/DescribeUserProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserProfilesInput } from "../types/DescribeUserProfilesInput";
import { DescribeUserProfilesOutput } from "../types/DescribeUserProfilesOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeUserProfilesInput";
export * from "../types/DescribeUserProfilesOutput";
export * from "../types/DescribeUserProfilesExceptionsUnion";

export class DescribeUserProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserProfilesInput,
      OutputTypesUnion,
      DescribeUserProfilesOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUserProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserProfilesInput,
    DescribeUserProfilesOutput,
    Blob
  >();

  constructor(readonly input: DescribeUserProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserProfilesInput,
    DescribeUserProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUserProfilesInput, DescribeUserProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLaunchTemplateVersions } from "../model/operations/DescribeLaunchTemplateVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLaunchTemplateVersionsInput } from "../types/DescribeLaunchTemplateVersionsInput";
import { DescribeLaunchTemplateVersionsOutput } from "../types/DescribeLaunchTemplateVersionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeLaunchTemplateVersionsInput";
export * from "../types/DescribeLaunchTemplateVersionsOutput";
export * from "../types/DescribeLaunchTemplateVersionsExceptionsUnion";

export class DescribeLaunchTemplateVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLaunchTemplateVersionsInput,
      OutputTypesUnion,
      DescribeLaunchTemplateVersionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLaunchTemplateVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLaunchTemplateVersionsInput,
    DescribeLaunchTemplateVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLaunchTemplateVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLaunchTemplateVersionsInput,
    DescribeLaunchTemplateVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLaunchTemplateVersionsInput,
        DescribeLaunchTemplateVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeIpRules } from "../model/operations/RevokeIpRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeIpRulesInput } from "../types/RevokeIpRulesInput";
import { RevokeIpRulesOutput } from "../types/RevokeIpRulesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/RevokeIpRulesInput";
export * from "../types/RevokeIpRulesOutput";
export * from "../types/RevokeIpRulesExceptionsUnion";

export class RevokeIpRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeIpRulesInput,
      OutputTypesUnion,
      RevokeIpRulesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeIpRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeIpRulesInput,
    RevokeIpRulesOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeIpRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<RevokeIpRulesInput, RevokeIpRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeIpRulesInput, RevokeIpRulesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

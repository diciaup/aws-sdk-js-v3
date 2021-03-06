import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateResolverRule } from "../model/operations/AssociateResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateResolverRuleInput } from "../types/AssociateResolverRuleInput";
import { AssociateResolverRuleOutput } from "../types/AssociateResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/AssociateResolverRuleInput";
export * from "../types/AssociateResolverRuleOutput";
export * from "../types/AssociateResolverRuleExceptionsUnion";

export class AssociateResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateResolverRuleInput,
      OutputTypesUnion,
      AssociateResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateResolverRuleInput,
    AssociateResolverRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateResolverRuleInput,
    AssociateResolverRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateResolverRuleInput, AssociateResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

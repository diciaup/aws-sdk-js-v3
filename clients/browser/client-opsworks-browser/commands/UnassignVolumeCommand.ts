import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnassignVolume } from "../model/operations/UnassignVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnassignVolumeInput } from "../types/UnassignVolumeInput";
import { UnassignVolumeOutput } from "../types/UnassignVolumeOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UnassignVolumeInput";
export * from "../types/UnassignVolumeOutput";
export * from "../types/UnassignVolumeExceptionsUnion";

export class UnassignVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnassignVolumeInput,
      OutputTypesUnion,
      UnassignVolumeOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = UnassignVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnassignVolumeInput,
    UnassignVolumeOutput,
    Blob
  >();

  constructor(readonly input: UnassignVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UnassignVolumeInput, UnassignVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnassignVolumeInput, UnassignVolumeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RejectTransitGatewayVpcAttachment } from "../model/operations/RejectTransitGatewayVpcAttachment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectTransitGatewayVpcAttachmentInput } from "../types/RejectTransitGatewayVpcAttachmentInput";
import { RejectTransitGatewayVpcAttachmentOutput } from "../types/RejectTransitGatewayVpcAttachmentOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RejectTransitGatewayVpcAttachmentInput";
export * from "../types/RejectTransitGatewayVpcAttachmentOutput";
export * from "../types/RejectTransitGatewayVpcAttachmentExceptionsUnion";

export class RejectTransitGatewayVpcAttachmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectTransitGatewayVpcAttachmentInput,
      OutputTypesUnion,
      RejectTransitGatewayVpcAttachmentOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RejectTransitGatewayVpcAttachment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectTransitGatewayVpcAttachmentInput,
    RejectTransitGatewayVpcAttachmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: RejectTransitGatewayVpcAttachmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectTransitGatewayVpcAttachmentInput,
    RejectTransitGatewayVpcAttachmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RejectTransitGatewayVpcAttachmentInput,
        RejectTransitGatewayVpcAttachmentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

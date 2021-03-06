import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListCertificatesByCA } from "../model/operations/ListCertificatesByCA";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCertificatesByCAInput } from "../types/ListCertificatesByCAInput";
import { ListCertificatesByCAOutput } from "../types/ListCertificatesByCAOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListCertificatesByCAInput";
export * from "../types/ListCertificatesByCAOutput";
export * from "../types/ListCertificatesByCAExceptionsUnion";

export class ListCertificatesByCACommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCertificatesByCAInput,
      OutputTypesUnion,
      ListCertificatesByCAOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListCertificatesByCA;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCertificatesByCAInput,
    ListCertificatesByCAOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListCertificatesByCAInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCertificatesByCAInput,
    ListCertificatesByCAOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCertificatesByCAInput, ListCertificatesByCAOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

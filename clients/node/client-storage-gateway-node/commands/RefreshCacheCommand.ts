import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RefreshCache } from "../model/operations/RefreshCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RefreshCacheInput } from "../types/RefreshCacheInput";
import { RefreshCacheOutput } from "../types/RefreshCacheOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/RefreshCacheInput";
export * from "../types/RefreshCacheOutput";
export * from "../types/RefreshCacheExceptionsUnion";

export class RefreshCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RefreshCacheInput,
      OutputTypesUnion,
      RefreshCacheOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RefreshCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RefreshCacheInput,
    RefreshCacheOutput,
    _stream.Readable
  >();

  constructor(readonly input: RefreshCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<RefreshCacheInput, RefreshCacheOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RefreshCacheInput, RefreshCacheOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

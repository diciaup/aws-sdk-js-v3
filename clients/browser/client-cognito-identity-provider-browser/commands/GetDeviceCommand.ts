import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDevice } from "../model/operations/GetDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeviceInput } from "../types/GetDeviceInput";
import { GetDeviceOutput } from "../types/GetDeviceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetDeviceInput";
export * from "../types/GetDeviceOutput";
export * from "../types/GetDeviceExceptionsUnion";

export class GetDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeviceInput,
      OutputTypesUnion,
      GetDeviceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = GetDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceInput,
    GetDeviceOutput,
    Blob
  >();

  constructor(readonly input: GetDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDeviceInput, GetDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        GetDeviceInput,
        GetDeviceOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<GetDeviceInput, GetDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

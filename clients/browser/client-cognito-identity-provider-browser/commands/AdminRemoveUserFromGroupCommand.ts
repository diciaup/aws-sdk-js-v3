import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminRemoveUserFromGroup } from "../model/operations/AdminRemoveUserFromGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminRemoveUserFromGroupInput } from "../types/AdminRemoveUserFromGroupInput";
import { AdminRemoveUserFromGroupOutput } from "../types/AdminRemoveUserFromGroupOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminRemoveUserFromGroupInput";
export * from "../types/AdminRemoveUserFromGroupOutput";
export * from "../types/AdminRemoveUserFromGroupExceptionsUnion";

export class AdminRemoveUserFromGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminRemoveUserFromGroupInput,
      OutputTypesUnion,
      AdminRemoveUserFromGroupOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminRemoveUserFromGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminRemoveUserFromGroupInput,
    AdminRemoveUserFromGroupOutput,
    Blob
  >();

  constructor(readonly input: AdminRemoveUserFromGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminRemoveUserFromGroupInput,
    AdminRemoveUserFromGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminRemoveUserFromGroupInput,
        AdminRemoveUserFromGroupOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminRemoveUserFromGroupInput, AdminRemoveUserFromGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

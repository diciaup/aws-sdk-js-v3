import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUserPool } from "../model/operations/DescribeUserPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserPoolInput } from "../types/DescribeUserPoolInput";
import { DescribeUserPoolOutput } from "../types/DescribeUserPoolOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DescribeUserPoolInput";
export * from "../types/DescribeUserPoolOutput";
export * from "../types/DescribeUserPoolExceptionsUnion";

export class DescribeUserPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserPoolInput,
      OutputTypesUnion,
      DescribeUserPoolOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUserPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserPoolInput,
    DescribeUserPoolOutput,
    Blob
  >();

  constructor(readonly input: DescribeUserPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeUserPoolInput, DescribeUserPoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DescribeUserPoolInput,
        DescribeUserPoolOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DescribeUserPoolInput, DescribeUserPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

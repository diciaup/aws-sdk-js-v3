import { GetCertificateAuthorityCertificateInput } from "../shapes/GetCertificateAuthorityCertificateInput";
import { GetCertificateAuthorityCertificateOutput } from "../shapes/GetCertificateAuthorityCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCertificateAuthorityCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCertificateAuthorityCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCertificateAuthorityCertificateInput
  },
  output: {
    shape: GetCertificateAuthorityCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidArnException
    }
  ]
};

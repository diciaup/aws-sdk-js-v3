import { ListDomainNamesInput } from "../shapes/ListDomainNamesInput";
import { ListDomainNamesOutput } from "../shapes/ListDomainNamesOutput";
import { BaseException } from "../shapes/BaseException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDomainNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDomainNames",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/domain"
  },
  input: {
    shape: ListDomainNamesInput
  },
  output: {
    shape: ListDomainNamesOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: ValidationException
    }
  ]
};

import { ListUsersInput } from "../shapes/ListUsersInput";
import { ListUsersOutput } from "../shapes/ListUsersOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUsersInput
  },
  output: {
    shape: ListUsersOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};

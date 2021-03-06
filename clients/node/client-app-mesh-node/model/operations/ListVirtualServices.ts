import { ListVirtualServicesInput } from "../shapes/ListVirtualServicesInput";
import { ListVirtualServicesOutput } from "../shapes/ListVirtualServicesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVirtualServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVirtualServices",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}/virtualServices"
  },
  input: {
    shape: ListVirtualServicesInput
  },
  output: {
    shape: ListVirtualServicesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};

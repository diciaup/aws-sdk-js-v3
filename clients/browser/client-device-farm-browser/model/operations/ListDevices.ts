import { ListDevicesInput } from "../shapes/ListDevicesInput";
import { ListDevicesOutput } from "../shapes/ListDevicesOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDevicesInput
  },
  output: {
    shape: ListDevicesOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};

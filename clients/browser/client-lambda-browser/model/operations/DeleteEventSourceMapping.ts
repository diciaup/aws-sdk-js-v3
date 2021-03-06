import { DeleteEventSourceMappingInput } from "../shapes/DeleteEventSourceMappingInput";
import { DeleteEventSourceMappingOutput } from "../shapes/DeleteEventSourceMappingOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEventSourceMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEventSourceMapping",
  http: {
    method: "DELETE",
    requestUri: "/2015-03-31/event-source-mappings/{UUID}"
  },
  input: {
    shape: DeleteEventSourceMappingInput
  },
  output: {
    shape: DeleteEventSourceMappingOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceInUseException
    }
  ]
};

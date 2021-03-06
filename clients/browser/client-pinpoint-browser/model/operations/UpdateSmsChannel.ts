import { UpdateSmsChannelInput } from "../shapes/UpdateSmsChannelInput";
import { UpdateSmsChannelOutput } from "../shapes/UpdateSmsChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSmsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSmsChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/sms"
  },
  input: {
    shape: UpdateSmsChannelInput
  },
  output: {
    shape: UpdateSmsChannelOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};

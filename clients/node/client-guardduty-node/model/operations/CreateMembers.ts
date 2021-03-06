import { CreateMembersInput } from "../shapes/CreateMembersInput";
import { CreateMembersOutput } from "../shapes/CreateMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member"
  },
  input: {
    shape: CreateMembersInput
  },
  output: {
    shape: CreateMembersOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};

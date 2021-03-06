import { UpdateBranchInput } from "../shapes/UpdateBranchInput";
import { UpdateBranchOutput } from "../shapes/UpdateBranchOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBranch",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/branches/{branchName}"
  },
  input: {
    shape: UpdateBranchInput
  },
  output: {
    shape: UpdateBranchOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};

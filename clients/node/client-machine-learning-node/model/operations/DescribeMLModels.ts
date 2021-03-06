import { DescribeMLModelsInput } from "../shapes/DescribeMLModelsInput";
import { DescribeMLModelsOutput } from "../shapes/DescribeMLModelsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMLModels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMLModels",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMLModelsInput
  },
  output: {
    shape: DescribeMLModelsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServerException
    }
  ]
};

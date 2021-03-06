import { DescribeAlgorithmInput } from "../shapes/DescribeAlgorithmInput";
import { DescribeAlgorithmOutput } from "../shapes/DescribeAlgorithmOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAlgorithm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAlgorithm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAlgorithmInput
  },
  output: {
    shape: DescribeAlgorithmOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

import { DescribeKeyPairsInput } from "../shapes/DescribeKeyPairsInput";
import { DescribeKeyPairsOutput } from "../shapes/DescribeKeyPairsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeKeyPairs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeKeyPairs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeKeyPairsInput
  },
  output: {
    shape: DescribeKeyPairsOutput
  },
  errors: []
};

import { DescribeAccountLimitsInput } from "../shapes/DescribeAccountLimitsInput";
import { DescribeAccountLimitsOutput } from "../shapes/DescribeAccountLimitsOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAccountLimits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccountLimits",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAccountLimitsInput
  },
  output: {
    shape: DescribeAccountLimitsOutput,
    resultWrapper: "DescribeAccountLimitsResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};

import { DescribeIdentityIdFormatInput } from "../shapes/DescribeIdentityIdFormatInput";
import { DescribeIdentityIdFormatOutput } from "../shapes/DescribeIdentityIdFormatOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdentityIdFormat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdentityIdFormat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIdentityIdFormatInput
  },
  output: {
    shape: DescribeIdentityIdFormatOutput
  },
  errors: []
};

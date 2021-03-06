import { DeleteSecurityGroupInput } from "../shapes/DeleteSecurityGroupInput";
import { DeleteSecurityGroupOutput } from "../shapes/DeleteSecurityGroupOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSecurityGroupInput
  },
  output: {
    shape: DeleteSecurityGroupOutput
  },
  errors: []
};

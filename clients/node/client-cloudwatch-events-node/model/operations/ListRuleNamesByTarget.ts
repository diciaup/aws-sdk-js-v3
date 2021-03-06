import { ListRuleNamesByTargetInput } from "../shapes/ListRuleNamesByTargetInput";
import { ListRuleNamesByTargetOutput } from "../shapes/ListRuleNamesByTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRuleNamesByTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRuleNamesByTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRuleNamesByTargetInput
  },
  output: {
    shape: ListRuleNamesByTargetOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};

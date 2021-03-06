import { ListReusableDelegationSetsInput } from "../shapes/ListReusableDelegationSetsInput";
import { ListReusableDelegationSetsOutput } from "../shapes/ListReusableDelegationSetsOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListReusableDelegationSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListReusableDelegationSets",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/delegationset"
  },
  input: {
    shape: ListReusableDelegationSetsInput
  },
  output: {
    shape: ListReusableDelegationSetsOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};

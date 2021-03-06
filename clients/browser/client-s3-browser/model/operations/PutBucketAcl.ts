import { PutBucketAclInput } from "../shapes/PutBucketAclInput";
import { PutBucketAclOutput } from "../shapes/PutBucketAclOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketAcl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketAcl",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?acl"
  },
  input: {
    shape: PutBucketAclInput
  },
  output: {
    shape: PutBucketAclOutput
  },
  errors: []
};

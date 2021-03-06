import { UploadPartCopyInput } from "../shapes/UploadPartCopyInput";
import { UploadPartCopyOutput } from "../shapes/UploadPartCopyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UploadPartCopy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadPartCopy",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: UploadPartCopyInput
  },
  output: {
    shape: UploadPartCopyOutput
  },
  errors: []
};

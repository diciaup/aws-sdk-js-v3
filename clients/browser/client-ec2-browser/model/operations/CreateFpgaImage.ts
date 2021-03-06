import { CreateFpgaImageInput } from "../shapes/CreateFpgaImageInput";
import { CreateFpgaImageOutput } from "../shapes/CreateFpgaImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFpgaImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFpgaImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFpgaImageInput
  },
  output: {
    shape: CreateFpgaImageOutput
  },
  errors: []
};

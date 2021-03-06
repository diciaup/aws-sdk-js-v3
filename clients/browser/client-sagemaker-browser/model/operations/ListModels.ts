import { ListModelsInput } from "../shapes/ListModelsInput";
import { ListModelsOutput } from "../shapes/ListModelsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListModels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListModels",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListModelsInput
  },
  output: {
    shape: ListModelsOutput
  },
  errors: []
};

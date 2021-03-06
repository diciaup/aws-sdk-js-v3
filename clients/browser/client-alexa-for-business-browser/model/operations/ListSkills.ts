import { ListSkillsInput } from "../shapes/ListSkillsInput";
import { ListSkillsOutput } from "../shapes/ListSkillsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSkills: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSkills",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSkillsInput
  },
  output: {
    shape: ListSkillsOutput
  },
  errors: []
};

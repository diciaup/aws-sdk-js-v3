import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProblemObservationsInput: _Structure_ = {
  type: "structure",
  required: ["ProblemId"],
  members: {
    ProblemId: {
      shape: {
        type: "string"
      }
    }
  }
};

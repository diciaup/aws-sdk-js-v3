import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticInferenceAccelerator: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configArn: {
      shape: {
        type: "string"
      }
    },
    configId: {
      shape: {
        type: "string"
      }
    },
    configType: {
      shape: {
        type: "string"
      }
    }
  }
};

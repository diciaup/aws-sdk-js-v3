import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentVariable: _Structure_ = {
  type: "structure",
  required: ["name", "value"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordTag: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

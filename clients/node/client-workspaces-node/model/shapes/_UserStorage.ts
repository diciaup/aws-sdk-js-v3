import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserStorage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Capacity: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

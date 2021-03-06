import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficMirrorPortRangeRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FromPort: {
      shape: {
        type: "integer"
      }
    },
    ToPort: {
      shape: {
        type: "integer"
      }
    }
  }
};

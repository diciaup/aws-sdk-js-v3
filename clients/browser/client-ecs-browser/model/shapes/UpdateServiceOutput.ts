import { _Service } from "./_Service";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    service: {
      shape: _Service
    }
  }
};

import { _TrafficPolicyInstance } from "./_TrafficPolicyInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTrafficPolicyInstanceOutput: _Structure_ = {
  type: "structure",
  required: ["TrafficPolicyInstance"],
  members: {
    TrafficPolicyInstance: {
      shape: _TrafficPolicyInstance
    }
  }
};

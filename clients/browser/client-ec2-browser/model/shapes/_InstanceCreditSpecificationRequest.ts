import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceCreditSpecificationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    CpuCredits: {
      shape: {
        type: "string"
      }
    }
  }
};

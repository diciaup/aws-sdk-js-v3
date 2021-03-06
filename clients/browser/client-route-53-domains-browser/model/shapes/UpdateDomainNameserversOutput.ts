import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainNameserversOutput: _Structure_ = {
  type: "structure",
  required: ["OperationId"],
  members: {
    OperationId: {
      shape: {
        type: "string"
      }
    }
  }
};

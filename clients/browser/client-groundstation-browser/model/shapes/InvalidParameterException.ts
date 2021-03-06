import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidParameterException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    parameterName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidParameterException",
  exceptionCode: "InvalidParameterException"
};

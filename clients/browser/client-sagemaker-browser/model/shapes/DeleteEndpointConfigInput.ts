import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEndpointConfigInput: _Structure_ = {
  type: "structure",
  required: ["EndpointConfigName"],
  members: {
    EndpointConfigName: {
      shape: {
        type: "string"
      }
    }
  }
};

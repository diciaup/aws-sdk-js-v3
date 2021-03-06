import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InternetGatewayAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};

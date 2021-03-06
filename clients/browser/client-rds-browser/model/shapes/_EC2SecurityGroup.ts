import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2SecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    EC2SecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    EC2SecurityGroupId: {
      shape: {
        type: "string"
      }
    },
    EC2SecurityGroupOwnerId: {
      shape: {
        type: "string"
      }
    }
  }
};

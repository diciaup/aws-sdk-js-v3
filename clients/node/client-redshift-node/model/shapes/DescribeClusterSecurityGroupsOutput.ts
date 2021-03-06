import { _ClusterSecurityGroups } from "./_ClusterSecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ClusterSecurityGroups: {
      shape: _ClusterSecurityGroups
    }
  }
};

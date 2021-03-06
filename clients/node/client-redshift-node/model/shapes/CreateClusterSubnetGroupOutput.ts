import { _ClusterSubnetGroup } from "./_ClusterSubnetGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterSubnetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterSubnetGroup: {
      shape: _ClusterSubnetGroup
    }
  }
};

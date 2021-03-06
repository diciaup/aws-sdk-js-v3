import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableSnapshotCopyInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};

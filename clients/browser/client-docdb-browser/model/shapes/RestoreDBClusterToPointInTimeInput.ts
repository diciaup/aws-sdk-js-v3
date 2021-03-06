import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreDBClusterToPointInTimeInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier", "SourceDBClusterIdentifier"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceDBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    RestoreToTime: {
      shape: {
        type: "timestamp"
      }
    },
    UseLatestRestorableTime: {
      shape: {
        type: "boolean"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    Tags: {
      shape: _TagList
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    EnableCloudwatchLogsExports: {
      shape: _LogTypeList
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    }
  }
};

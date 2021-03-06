import { _ValueStringList } from "./_ValueStringList";
import { _StorageDescriptor } from "./_StorageDescriptor";
import { _ParametersMap } from "./_ParametersMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Partition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Values: {
      shape: _ValueStringList
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastAccessTime: {
      shape: {
        type: "timestamp"
      }
    },
    StorageDescriptor: {
      shape: _StorageDescriptor
    },
    Parameters: {
      shape: _ParametersMap
    },
    LastAnalyzedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

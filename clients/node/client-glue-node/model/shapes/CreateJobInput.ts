import { _ExecutionProperty } from "./_ExecutionProperty";
import { _JobCommand } from "./_JobCommand";
import { _GenericMap } from "./_GenericMap";
import { _ConnectionsList } from "./_ConnectionsList";
import { _TagsMap } from "./_TagsMap";
import { _NotificationProperty } from "./_NotificationProperty";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Role", "Command"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    LogUri: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    ExecutionProperty: {
      shape: _ExecutionProperty
    },
    Command: {
      shape: _JobCommand
    },
    DefaultArguments: {
      shape: _GenericMap
    },
    Connections: {
      shape: _ConnectionsList
    },
    MaxRetries: {
      shape: {
        type: "integer"
      }
    },
    AllocatedCapacity: {
      shape: {
        type: "integer"
      }
    },
    Timeout: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaxCapacity: {
      shape: {
        type: "float"
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagsMap
    },
    NotificationProperty: {
      shape: _NotificationProperty
    },
    GlueVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumberOfWorkers: {
      shape: {
        type: "integer"
      }
    },
    WorkerType: {
      shape: {
        type: "string"
      }
    }
  }
};

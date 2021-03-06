import { _ResourceLocation } from "./_ResourceLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaticIp: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    ipAddress: {
      shape: {
        type: "string"
      }
    },
    attachedTo: {
      shape: {
        type: "string"
      }
    },
    isAttached: {
      shape: {
        type: "boolean"
      }
    }
  }
};

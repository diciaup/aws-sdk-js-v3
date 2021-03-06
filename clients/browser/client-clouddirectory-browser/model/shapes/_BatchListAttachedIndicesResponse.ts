import { _IndexAttachmentList } from "./_IndexAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListAttachedIndicesResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IndexAttachments: {
      shape: _IndexAttachmentList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

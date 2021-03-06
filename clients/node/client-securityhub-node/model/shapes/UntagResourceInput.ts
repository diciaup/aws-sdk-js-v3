import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagKeys"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceArn"
    },
    TagKeys: {
      shape: _TagKeyList,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};

import { _IdFormatList } from "./_IdFormatList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdFormatOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Statuses: {
      shape: _IdFormatList,
      locationName: "statusSet"
    }
  }
};

import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeNames: {
      shape: _AttributeNameList
    }
  }
};

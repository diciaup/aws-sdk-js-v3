import { _Policies } from "./_Policies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExplicitDeny: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policies: {
      shape: _Policies
    }
  }
};

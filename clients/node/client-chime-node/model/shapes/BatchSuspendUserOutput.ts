import { _UserErrorList } from "./_UserErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchSuspendUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserErrors: {
      shape: _UserErrorList
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const GlobalSignOutInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};

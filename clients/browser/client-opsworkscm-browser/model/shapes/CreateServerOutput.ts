import { _Server } from "./_Server";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Server: {
      shape: _Server
    }
  }
};

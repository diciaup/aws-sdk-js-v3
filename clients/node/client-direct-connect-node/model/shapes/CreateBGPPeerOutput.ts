import { _VirtualInterface } from "./_VirtualInterface";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBGPPeerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualInterface: {
      shape: _VirtualInterface
    }
  }
};

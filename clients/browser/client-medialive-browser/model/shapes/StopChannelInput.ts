import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopChannelInput: _Structure_ = {
  type: "structure",
  required: ["ChannelId"],
  members: {
    ChannelId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "channelId"
    }
  }
};

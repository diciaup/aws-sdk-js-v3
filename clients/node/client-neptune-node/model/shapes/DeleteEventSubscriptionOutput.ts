import { _EventSubscription } from "./_EventSubscription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEventSubscriptionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventSubscription: {
      shape: _EventSubscription
    }
  }
};

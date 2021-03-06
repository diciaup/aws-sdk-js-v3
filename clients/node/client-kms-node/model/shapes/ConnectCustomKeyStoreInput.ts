import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConnectCustomKeyStoreInput: _Structure_ = {
  type: "structure",
  required: ["CustomKeyStoreId"],
  members: {
    CustomKeyStoreId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

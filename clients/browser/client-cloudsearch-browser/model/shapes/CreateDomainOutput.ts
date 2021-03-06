import { _DomainStatus } from "./_DomainStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainStatus: {
      shape: _DomainStatus
    }
  }
};

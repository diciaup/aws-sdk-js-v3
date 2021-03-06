import { _LicenseSpecifications } from "./_LicenseSpecifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLicenseSpecificationsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    AddLicenseSpecifications: {
      shape: _LicenseSpecifications
    },
    RemoveLicenseSpecifications: {
      shape: _LicenseSpecifications
    }
  }
};

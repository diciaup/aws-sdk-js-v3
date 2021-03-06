import { _CustomerDefinedValues } from "./_CustomerDefinedValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateDataSetInput: _Structure_ = {
  type: "structure",
  required: [
    "dataSetType",
    "dataSetPublicationDate",
    "roleNameArn",
    "destinationS3BucketName",
    "snsTopicArn"
  ],
  members: {
    dataSetType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    dataSetPublicationDate: {
      shape: {
        type: "timestamp"
      }
    },
    roleNameArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    destinationS3BucketName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    destinationS3Prefix: {
      shape: {
        type: "string"
      }
    },
    snsTopicArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    customerDefinedValues: {
      shape: _CustomerDefinedValues
    }
  }
};

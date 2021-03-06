import { StopConfigurationRecorderInput } from "../shapes/StopConfigurationRecorderInput";
import { StopConfigurationRecorderOutput } from "../shapes/StopConfigurationRecorderOutput";
import { NoSuchConfigurationRecorderException } from "../shapes/NoSuchConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopConfigurationRecorder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopConfigurationRecorder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopConfigurationRecorderInput
  },
  output: {
    shape: StopConfigurationRecorderOutput
  },
  errors: [
    {
      shape: NoSuchConfigurationRecorderException
    }
  ]
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartPipelineReprocessingInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "pipelineName"
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

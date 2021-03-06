import { DescribeImportImageTasksInput } from "../shapes/DescribeImportImageTasksInput";
import { DescribeImportImageTasksOutput } from "../shapes/DescribeImportImageTasksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeImportImageTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImportImageTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImportImageTasksInput
  },
  output: {
    shape: DescribeImportImageTasksOutput
  },
  errors: []
};

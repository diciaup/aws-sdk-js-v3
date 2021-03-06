import { SearchContactsInput } from "../shapes/SearchContactsInput";
import { SearchContactsOutput } from "../shapes/SearchContactsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchContacts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchContacts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchContactsInput
  },
  output: {
    shape: SearchContactsOutput
  },
  errors: []
};

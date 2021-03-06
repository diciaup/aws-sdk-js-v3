import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type UntagResourceExceptionsUnion =
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | InternalFailureException;

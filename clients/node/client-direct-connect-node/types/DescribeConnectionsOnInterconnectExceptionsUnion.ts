import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DescribeConnectionsOnInterconnectExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;

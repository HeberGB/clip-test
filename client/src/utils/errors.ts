import { DUPLICATE_ERR } from "../constants/errors";

export function getMessageError(rawMessage: string): string {
  if (rawMessage.includes(DUPLICATE_ERR)) {
    return "Your email already exists";
  }
  return `Check technical support with the following error:: ${rawMessage}`;
}

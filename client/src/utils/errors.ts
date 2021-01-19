import { DUPLICATE_ERR } from "../constants/errors";

export function getMessageError(rawMessage: string) {
  if (rawMessage.includes(DUPLICATE_ERR)) {
    return "Your email already exists";
  }
}

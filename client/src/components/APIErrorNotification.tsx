import { Alert, Button } from "react-bootstrap";
import { useAPIError } from "../hooks/useAPIError";
import styled from "styled-components";
import { getMessageError } from "../utils/errors";

const ErrorAlert = styled(Alert)`
  position: fixed;
  top: 2.5%;
  right: 5%;
  text-align: center;
  z-index: 1051;
`;

const CloseButton = styled(Button)`
  padding: 5px;
  margin: 0 0 0 20px;
`;

export default function APIErrorNotification() {
  const { error, removeError } = useAPIError();

  if (error) {
    const readableError = getMessageError(error);
    return (
      <ErrorAlert variant="danger">
        {readableError}
        <CloseButton onClick={() => removeError()} variant="outline-danger">
          close
        </CloseButton>
      </ErrorAlert>
    );
  }

  return null;
}

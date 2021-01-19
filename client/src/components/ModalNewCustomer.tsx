import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  CREATE_CUSTOMER,
  Customer,
  CustomerDto,
  GET_CUSTOMERS,
} from "../api/cutomers";
import { useAPIError } from "../hooks/useAPIError";

type Props = {
  onHide: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  show: boolean;
};

type Response = {
  createCustomer: Customer;
};

type Variables = {
  dto: CustomerDto;
};

export default function ModalNewCustomer({ onHide, show }: Props) {
  const [dto, setDto] = useState<CustomerDto>({ name: "", email: "" });
  const { addError } = useAPIError();
  const [validated, setValidated] = useState(false);

  const [createEmail] = useMutation<Response, Variables>(CREATE_CUSTOMER, {
    onCompleted: (data) => console.log(data),
    onError: (err) => addError(err.message),
    refetchQueries: [{ query: GET_CUSTOMERS }],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDto({ ...dto, [name]: value });
    setValidated(Boolean(event.target.value));
  };

  const save = (event: FormEvent) => {
    event.preventDefault();
    if (validated) {
      createEmail({
        variables: {
          dto,
        },
      });
    }
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form inline onSubmit={save} noValidate validated={validated}>
          <Form.Control
            required
            type="text"
            name="name"
            alt="First Name"
            placeholder="Customer Name"
            onChange={handleChange}
            isInvalid={!validated}
          />
          <Form.Control
            required
            type="email"
            name="email"
            alt="Email"
            placeholder="Customer Email"
            onChange={handleChange}
            isInvalid={!validated}
          />
          <Button variant="success" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

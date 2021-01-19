import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  Customer,
  CustomerDto,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from "../api/cutomers";
import { useAPIError } from "../hooks/useAPIError";

type Props = {
  onHide: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  show: boolean;
  values: CustomerDto;
  id: string;
};

type Response = {
  createCustomer: Customer;
};

type Variables = {
  id: string;
  dto: CustomerDto;
};

export default function ModalUpdateCustomer({
  onHide,
  show,
  values,
  id,
}: Props) {
  const [dto, setDto] = useState<CustomerDto>({
    name: values.name,
    email: values.email,
  });
  const { addError } = useAPIError();
  const [validated, setValidated] = useState(true);

  const [createEmail] = useMutation<Response, Variables>(UPDATE_CUSTOMER, {
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
          id,
          dto,
        },
      });
    }
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Update customer {values.email}</Modal.Title>
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
            value={dto.name}
          />
          <Form.Control
            required
            type="email"
            name="email"
            alt="Email"
            placeholder="Customer Email"
            onChange={handleChange}
            isInvalid={!validated}
            value={dto.email}
          />
          <Button variant="success" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

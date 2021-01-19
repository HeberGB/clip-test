import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Customer } from "../api/cutomers";
import ModalNewCustomer from "./ModalNewCustomer";

type Props = {
  customers: Customer[];
};

export default function TableCustomers({ customers }: Props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Customers Templates</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Openpay ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created at</th>
          <th>Updated at</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(({ id, opId, name, email, createdAt, updatedAt }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{opId}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td>{new Date(updatedAt).toLocaleDateString()}</td>
          </tr>
        ))}
        <tr>
          <th>
            <>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Add new customer
              </Button>
              <ModalNewCustomer
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </th>
        </tr>
      </tbody>
    </Table>
  );
}

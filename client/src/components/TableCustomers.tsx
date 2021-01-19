import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Customer } from "../api/cutomers";
import ModalNewCustomer from "./ModalNewCustomer";
import ModalUpdateCustomer from "./ModalUpdateCustomer";

type Props = {
  customers: Customer[];
};

export default function TableCustomers({ customers }: Props) {
  const [modalShow, setModalShow] = useState({ update: false, create: false });

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
            <td>
              <>
                <Button
                  variant="primary"
                  onClick={() => setModalShow({ create: false, update: true })}
                >
                  Update
                </Button>
                <ModalUpdateCustomer
                  show={modalShow.update}
                  onHide={() => setModalShow({ create: false, update: false })}
                  values={{ name, email }}
                  id={id}
                />
              </>
            </td>
          </tr>
        ))}
        <tr>
          <th>
            <>
              <Button
                variant="primary"
                onClick={() => setModalShow({ create: true, update: false })}
              >
                Add new customer
              </Button>
              <ModalNewCustomer
                show={modalShow.create}
                onHide={() => setModalShow({ create: false, update: false })}
              />
            </>
          </th>
        </tr>
      </tbody>
    </Table>
  );
}

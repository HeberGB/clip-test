import { gql } from "@apollo/client";

export type Customer = {
  id: string;
  opId: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
};

export type CustomerDto = {
  name: string;
  email: string;
};

export const GET_CUSTOMERS = gql`
  query GET_CUSTOMERS {
    getCustomers {
      id
      opId
      createdAt
      updatedAt
      name
      email
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation CREATE_CUSTOMER($dto: CustomerDto!) {
    createCustomer(dto: $dto) {
      id
      createdAt
      updatedAt
      opId
      name
      email
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UPDATE_CUSTOMER($id: ID!, $dto: CustomerDto!) {
    updateCustomer(id: $id, dto: $dto) {
      id
      createdAt
      updatedAt
      opId
      name
      email
    }
  }
`;

import { useQuery } from "@apollo/client";
import { Customer, GET_CUSTOMERS } from "../api/cutomers";
import TableCustomers from "../components/TableCustomers";

type Response = {
  getCustomers: Customer[];
};

export default function ListCustomers() {
  const { loading, error, data } = useQuery<Response>(GET_CUSTOMERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error while with service customer</p>;

  const customers = data ? data.getCustomers : [];

  return <TableCustomers customers={customers}></TableCustomers>;
}

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NotFound from "./layouts/NotFound";
import { APIErrorProvider } from "./providers/APIErrorProvider";
import APIErrorNotification from "./components/APIErrorNotification";
import Customers from "./layouts/Customers";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore",
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <APIErrorProvider>
        <Router>
          <Container fluid>
            <Switch>
              <Route exact path="/" component={Customers} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Container>
        </Router>
        <APIErrorNotification />
      </APIErrorProvider>
    </ApolloProvider>
  );
}

export default App;

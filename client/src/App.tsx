import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NotFound from "./layouts/NotFound";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid style={{ height: "100%" }}>
          <Switch>
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;

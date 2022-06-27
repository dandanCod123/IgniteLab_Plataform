import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return(
    <ApolloProvider client={Client}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ApolloProvider>

  )
  
}

export default App

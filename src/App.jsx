import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layouts";
import { LoginRouter, PublicRouter } from "./router";
import { CartProvider } from "./context";


function App() {

  const userConnection = localStorage.getItem("isUserLogged")

  return (
    <CartProvider>
      <ChakraProvider>
        <Layout>
          {userConnection === "true" ? (
            <PublicRouter />
          )
          : (
          <LoginRouter />
          )}
        </Layout>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
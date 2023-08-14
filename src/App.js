import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import Page from "./components/page";

function App() {
  return (
    <Box bg="#f1f1f1" h="100vh">
      <Header />
      <Page></Page>
    </Box>
  );
}

export default App;

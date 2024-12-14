import { Flex, Box } from "@chakra-ui/react";
import { Footer } from "../components";

export const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
};

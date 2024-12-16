import { Heading, Divider, Button, Input, Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBullseye } from "react-icons/fa";

const BoxType = ({ isUserLogged, loginBtn }) => {
  const userStyles = {
    color: "blue",
  };

  return (
    <>
      <Heading style={isUserLogged ? userStyles : null}>
        Conditional Rendering
      </Heading>
      <Divider />
      <Box>{isUserLogged ? <Box>Connected</Box> : <Box>Disconnected</Box>}</Box>
      <Button onClick={loginBtn}>{isUserLogged ? "Log out" : "Login"}</Button>
    </>
  );
};

export const ConditionalRendering = ({ componentType }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const login = () => {
    setIsUserLogged(true);
    localStorage.setItem("isUserLogged", true)
  };

  const logout = () => {
    setIsUserLogged(false);
    localStorage.setItem("isUserLogged", false)
  };

  switch (componentType) {
    case "button":
      return (
        <Flex justifyContent={"center"} marginTop={"33%"}>
          <Button>My button</Button>
        </Flex>
      );
    case "input":
      return (
        <Flex justifyContent={"center"} margin={"15px"}>
          <Input placeholder="Input" />
        </Flex>
      );
    default:
      return (
        <Box>
          <BoxType isUserLogged={isUserLogged} loginBtn={isUserLogged ? logout : login} />
        </Box>
      );
  }
};

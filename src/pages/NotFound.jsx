import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
    <Flex
    alignItems={"center"}
    justifyContent={"center"}
    flexDirection={"column"}
    marginTop={"32%"}
    >
    <Heading> 404 Not found</Heading>
    <Text>¡Oops! We couldn't find what you're looking for.</Text>
    <Button>
        <Link to={"/"}>Back to Home</Link>
    </Button>
    </Flex>
    )
}
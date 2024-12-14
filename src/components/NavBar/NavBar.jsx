import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { CartWidget } from "../CartWidget/CartWidget";
import { useCategories } from "../../hooks/useCategories";
import { Events } from "../../pages";

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { categories } = useCategories();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">TradeMark</Link>
          </Box>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Search categories
            </MenuButton>
            <MenuList height={"250px"} overflowY={"scroll"}>
              {
                categories.map((category) => {return(
                <MenuItem key={category.slug}><Link to={`/category/${category.slug}`}>{category.name}</Link></MenuItem>
                )})
              }
            </MenuList>
          </Menu>

          <Link to={'/Events'}>Events</Link>

          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>User</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Button 1</MenuItem>
                  <MenuItem>Button 2</MenuItem>
                  <MenuItem>Button 3</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

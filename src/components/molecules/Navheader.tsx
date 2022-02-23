import {
  Flex,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
const Navheader: React.FC = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={"row"}
      w={"100%"}
      h="10%"
      px={12}
    >
      <ChakraLink
        color={"secondary"}
        fontWeight="bold"
        fontSize={"lg"}
        float={"left"}
      >
        Cristovão Farias
      </ChakraLink>
      <UnorderedList
        color={"secondary"}
        display={"flex"}
        justifyContent={"space-around"}
        width={"20%"}
        listStyleType={"none"}
        float={"right"}
      >
        <ListItem>
          <Link to={"/"}>
            <ChakraLink size={"md"} float={"left"}>
              About me
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ChakraLink size={"md"} float={"left"}>
            Resume
          </ChakraLink>
        </ListItem>
        <ListItem>
          <Link to="/projects">
            <ChakraLink size={"md"} float={"left"}>
              Projects
            </ChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <ChakraLink size={"md"} float={"left"}>
            Blog
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink size={"md"} float={"left"}>
            Contacts
          </ChakraLink>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Navheader;

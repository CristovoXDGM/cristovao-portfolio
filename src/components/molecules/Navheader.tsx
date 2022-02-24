import {
  Flex,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
  styled,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import CustomChakraLink from "../atoms/CustomChakraLink";

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
      <CustomChakraLink
        color={"secondary"}
        fontWeight="bold"
        fontSize={"lg"}
        float={"left"}
      >
        Cristovão Farias
      </CustomChakraLink>
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
            <CustomChakraLink size={"md"}>About me</CustomChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <CustomChakraLink
            href="/docs/CristovaoResume.pdf"
            download={"CristovaoResume.pdf"}
            size={"md"}
          >
            Resume
          </CustomChakraLink>
        </ListItem>
        <ListItem>
          <Link to="/projects">
            <CustomChakraLink size={"md"}>Projects</CustomChakraLink>
          </Link>
        </ListItem>
        <ListItem>
          <CustomChakraLink
            href="https://dev.to/cristovoxdgm"
            isExternal
            size={"md"}
          >
            Blog
          </CustomChakraLink>
        </ListItem>
        <ListItem>
          <CustomChakraLink size={"md"}>Contacts</CustomChakraLink>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Navheader;

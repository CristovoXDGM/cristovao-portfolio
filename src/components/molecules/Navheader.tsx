import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
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
      <Link
        color={"secondary"}
        fontWeight="bold"
        fontSize={"lg"}
        float={"left"}
      >
        Cristovão Farias
      </Link>
      <UnorderedList
        color={"secondary"}
        display={"flex"}
        justifyContent={"space-around"}
        width={"20%"}
        listStyleType={"none"}
        float={"right"}
      >
        <ListItem>
          <Link size={"md"} float={"left"}>
            About me
          </Link>
        </ListItem>
        <ListItem>
          <Link size={"md"} float={"left"}>
            Resume
          </Link>
        </ListItem>
        <ListItem>
          <Link size={"md"} float={"left"}>
            Projects
          </Link>
        </ListItem>
        <ListItem>
          <Link size={"md"} float={"left"}>
            Blog
          </Link>
        </ListItem>
        <ListItem>
          <Link size={"md"} float={"left"}>
            Contacts
          </Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Navheader;

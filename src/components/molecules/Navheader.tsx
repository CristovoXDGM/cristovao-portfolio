import { Flex, ListItem, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CustomChakraLink from "../atoms/CustomChakraLink";
import CustomMobileMenu from "./CustomMobileMenu";

const Navheader: React.FC = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={"row"}
      position="fixed"
      w={"100%"}
      h="10%"
      bgColor={"main"}
      px={12}
      zIndex={2}
    >
      <CustomChakraLink
        color={"secondary"}
        fontWeight="bold"
        fontSize={isLargerThan800 ? "lg" : "md"}
        float={"left"}
        w="50%"
      >
        Cristovão Farias
      </CustomChakraLink>

      {isLargerThan800 ? (
        <UnorderedList
          w="50%"
          color={"secondary"}
          display={"flex"}
          justifyContent={"space-evenly"}
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
              Download Resume
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
        </UnorderedList>
      ) : (
        <CustomMobileMenu />
      )}
    </Flex>
  );
};

export default Navheader;

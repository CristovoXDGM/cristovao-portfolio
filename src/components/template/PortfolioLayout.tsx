import {
  Box,
  Flex,
  FlexProps,
  Heading,
  HStack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CustomChakraLink from "../atoms/CustomChakraLink";
import Navheader from "../molecules/Navheader";

type PortfolioLayoutProps = {
  children: React.ReactNode;
};

const PortfolioLayout = (props: PortfolioLayoutProps) => {
  const customFlexProp: FlexProps = {
    alignItems: "center",
    flexDir: "column",

    color: "white",
    w: "100%",
    h: "100vh",
    bgColor: "main",
  };

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex {...customFlexProp}>
      <Navheader />

      {props.children}
      <HStack h="10%" w="100%" bgColor={"main"}>
        <VStack
          display={isLargerThan800 ? "flex" : "none"}
          align="center"
          justify={"flex-start"}
          h="100%"
          w={"50%"}
        >
          <Heading fontSize={20} color={"secondary"}>
            E-mail
          </Heading>
          <Heading
            as={CustomChakraLink}
            href="mailto:cristovao.teles.farias@gmail.com"
            fontSize={16}
            color={"secondary"}
          >
            cristovao.teles.farias@gmail.com
          </Heading>
        </VStack>
        <Flex
          w={isLargerThan800 ? "50%" : "100%"}
          align={"center"}
          px={10}
          flexDir={isLargerThan800 ? "row-reverse" : "row"}
          h="10%"
        >
          <Heading fontSize={20} float="right" color={"secondary"}>
            @ by Cristovão Farias 2021
          </Heading>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default PortfolioLayout;

import React from "react";
import {
  Box,
  Flex,
  FlexProps,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Navheader from "../molecules/Navheader";
const PortfolioLayout: React.FC = ({ children }) => {
  const customFlexProp: FlexProps = {
    alignItems: "center",
    flexDir: "column",
    color: "white",
    w: "100%",
    h: "100vh",
    bgColor: "main",
  };

  return (
    <Flex {...customFlexProp}>
      <Navheader />
      <HStack h="80%" w={"100%"}>
        <Box h="100%" w="50%" bgColor={"main"}></Box>
        <Box
          h="100%"
          w="50%"
          bgGradient={"linear(to-l,placeHoldColor,primary)"}
        ></Box>
      </HStack>
      {children}
      <HStack h="10%" w="100%" bgColor={"main"}>
        <VStack
          display={"flex"}
          align="center"
          justify={"flex-start"}
          h="100%"
          w="50%"
        >
          <Heading fontSize={20} color={"secondary"}>
            E-mail
          </Heading>
          <Heading fontSize={16} color={"secondary"}>
            cristovao.teles.farias@gmail.com
          </Heading>
        </VStack>
        <Flex align={"center"} px={10} flexDir="row-reverse" w="50%" h="10%">
          <Heading fontSize={20} float="right" color={"secondary"}>
            @ by Cristovão Farias 2021
          </Heading>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default PortfolioLayout;

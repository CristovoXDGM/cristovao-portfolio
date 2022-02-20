import {
  Box,
  Flex,
  Heading,
  HStack,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";
// import { Container } from './styles';

const ProfileCard: React.FC = () => {
  return (
    <Box
      bgColor={"#F1FAEE"}
      width="40%"
      height={"60%"}
      position="absolute"
      right={0}
      top={0}
      bottom={0}
      left={0}
      mx="auto"
      my={"auto"}
      boxShadow="dark-lg"
      borderRadius={"3xl"}
      overflow="hidden"
    >
      <Flex flexDir={"row"} w={"100%"} h="80%">
        <Stack
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          w="50%"
        >
          <Box
            borderRadius={"full"}
            h={"10rem"}
            w="10rem"
            bgColor={"placeHoldColor"}
          ></Box>
          <Heading color={"secondary"} size={"md"}>
            Cristovão Farias
          </Heading>
          <Text color={"secondary"} size={"sm"}>
            Mobile Software Engineer
          </Text>
        </Stack>
        <Stack
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          w="50%"
          color={"secondary"}
        >
          <Heading>Hi my name is Cristovão</Heading>
        </Stack>
      </Flex>
      <Box color={"secondary"} w={"100%"} h="20%" bgColor="primary">
        <HStack
          h="100%"
          align={"center"}
          w="100%"
          justify={"center"}
          spacing={20}
        >
          <Icon icon="ant-design:instagram-filled" height="3.2rem" />

          <Icon icon="akar-icons:linkedin-box-fill" height="2.8rem" />
          <Icon icon="akar-icons:github-fill" height="2.8rem" />
          <Icon icon="ant-design:youtube-filled" height="3.8rem" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProfileCard;

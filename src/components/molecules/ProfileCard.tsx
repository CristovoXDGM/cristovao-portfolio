import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";
import ProfilePic from "/images/PicProfile.png";

const ProfileCard: React.FC = () => {
  return (
    <Box
      bgColor={"main"}
      width="40%"
      height={"60%"}
      position="absolute"
      right={0}
      top={0}
      bottom={0}
      left={0}
      mx="auto"
      my={"auto"}
      boxShadow="0rem 0.5rem 1.4rem #ffffff22"
      borderRadius={"3xl"}
      overflow="hidden"
    >
      <Flex flexDir={"row"} w={"100%"} h="80%">
        <Stack alignItems={"center"} justifyContent={"center"} w="50%">
          <Box borderRadius={"full"} h={"10rem"} w="10rem" marginBottom={20}>
            <Image src={ProfilePic} />
          </Box>
          <Heading color={"secondary"} size={"md"}>
            Cristovão Farias
          </Heading>
          <Text color={"secondary"} size={"sm"}>
            Mobile Software Engineer
          </Text>
        </Stack>
        <Stack
          spacing={10}
          alignItems={"center"}
          justifyContent={"center"}
          w="50%"
          color={"secondary"}
          marginRight="5rem"
        >
          <Heading textAlign={"center"}>Hi! my name's Cristovão</Heading>
          <Text textAlign={"center"} fontSize={"2xl"}>
            Currently working and developing awesome products at We are
            reasonable people.
          </Text>
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

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
import {
  BoxAnimated,
  boxAnimatedVariant,
} from "../../styles/animatedComponents";
import ProfilePic from "/images/PicProfile.png";

const ProfileCard: React.FC = () => {
  return (
    <BoxAnimated
      bgColor={"main"}
      width="40%"
      height={"60%"}
      position="absolute"
      right={0}
      top={0}
      bottom={0}
      variants={boxAnimatedVariant}
      initial="hidden"
      animate="visible"
      left={0}
      mx="auto"
      my={"auto"}
      boxShadow="0rem 0.4rem 0.5rem #ffffff20"
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
            Frontend / Mobile Engineer
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
          <Text textAlign={"justify"} fontSize={"md"}>
            A lover of technology and games, Looking for an opportunity to
            create innovative products and solutions. I really enjoy being
            self-taught, learning quickly whatever is necessary for the project,
            main focusing on mobile development using Flutter.
          </Text>
        </Stack>
      </Flex>
      <Box
        color={"secondary"}
        w={"100%"}
        h="20%"
        bgGradient={"linear(to-r,placeHoldColor,primary)"}
      >
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
    </BoxAnimated>
  );
};

export default ProfileCard;

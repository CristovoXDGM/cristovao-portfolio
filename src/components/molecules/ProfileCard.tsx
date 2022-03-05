import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";
import {
  BoxAnimated,
  boxAnimatedVariant,
} from "../../styles/animatedComponents";
import ProfilePic from "/images/PicProfile.png";

const ProfileCard: React.FC = () => {
  const [isLargerThan1500] = useMediaQuery("(min-width:1500px)");
  const [isLargerThan800] = useMediaQuery("(min-width:800px)");
  return (
    <BoxAnimated
      bgColor={"main"}
      width={isLargerThan1500 ? "40%" : "80%"}
      height={isLargerThan1500 ? "60%" : "77%"}
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
      boxShadow="0rem 0.2rem 0.5rem #ffecd184"
      borderRadius={"3xl"}
      overflow="hidden"
    >
      <Flex flexDir={"row"} w={"100%"} h="80%">
        <Stack
          display={isLargerThan1500 ? "flex" : "none"}
          alignItems={"center"}
          justifyContent={"center"}
          w="50%"
        >
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
          w={isLargerThan1500 ? "50%" : "100%"}
          h={isLargerThan1500 ? "100%" : "90%"}
          color={"secondary"}
          marginRight={isLargerThan1500 ? "5rem" : 0}
          paddingTop={isLargerThan1500 ? 0 : "8rem"}
          paddingX={isLargerThan1500 ? 0 : "2rem"}
          overflowY={isLargerThan1500 ? "hidden" : "scroll"}
        >
          <Heading textAlign={"center"}>Hi! my name's Cristovão</Heading>
          <Text textAlign={"justify"} fontSize={"md"}>
            A lover of technology and games, Looking for an opportunity to
            create innovative products and solutions. I really enjoy being
            self-taught, learning quickly whatever is necessary for the project,
            main focusing on mobile development using Flutter. Follow my
            contacts link bellow:
          </Text>
        </Stack>
      </Flex>
      <Box
        color={"secondary"}
        w={"100%"}
        h="20%"
        bgColor={"placeHoldColor"}
        scale={isLargerThan1500 ? 1 : 0.3}
      >
        <HStack
          h="100%"
          align={"center"}
          w="100%"
          justify={"center"}
          spacing={20}
          transform={isLargerThan800 ? "scale(1)" : "scale(0.5)"}
        >
          <Link
            _hover={{ color: "main" }}
            href="https://www.instagram.com/kiustudios/"
            isExternal
          >
            <Icon icon="ant-design:instagram-filled" height="3.2rem" />
          </Link>
          <Link
            _hover={{ color: "main" }}
            href="https://www.linkedin.com/in/cristovaofarias/"
            isExternal
          >
            <Icon icon="akar-icons:linkedin-box-fill" height="2.8rem" />
          </Link>
          <Link
            _hover={{ color: "main" }}
            href="https://github.com/cristovoxdgm"
            isExternal
          >
            <Icon icon="akar-icons:github-fill" height="2.8rem" />
          </Link>
          <Link
            _hover={{ color: "main" }}
            href="https://www.youtube.com/channel/UCUdmXvjS1pBarFUD5cUpeBQ"
            isExternal
          >
            <Icon icon="ant-design:youtube-filled" height="3.8rem" />
          </Link>
        </HStack>
      </Box>
    </BoxAnimated>
  );
};

export default ProfileCard;

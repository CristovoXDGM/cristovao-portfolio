import {
  Box,
  Container,
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

import networkLinks from "../../utils/networkLinks.json";

const networkLinkList: any = networkLinks.networkLinks;

const ProfileCard: React.FC = () => {
  const [isLargerThan1148] = useMediaQuery("(min-width:1300px)");
  const [isLargerThan800] = useMediaQuery("(min-width:800px)");

  const getNetworkItensList = () => {
    return networkLinkList.map((item: any) => (
      <Link _hover={{ color: "main" }} href={item.link_url} isExternal>
        <Icon icon={item.icon} height={item.icon_height} />
      </Link>
    ));
  };

  return (
    <BoxAnimated
      bgColor={"main"}
      width={isLargerThan1148 ? "55%" : "80%"}
      height={isLargerThan1148 ? "70%" : "77%"}
      position="absolute"
      right={0}
      top={0}
      bottom={0}
      variants={boxAnimatedVariant}
      initial="hidden"
      animate="visible"
      left={0}
      mx="auto"
      my="auto"
      boxShadow="0rem 0.3rem 0.8rem #323232"
      borderRadius={"3xl"}
      overflow="hidden"
    >
      <Flex flexDir={"row"} w={"100%"} h="80%">
        <Stack
          display={isLargerThan1148 ? "flex" : "none"}
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
          w={isLargerThan1148 ? "50%" : "100%"}
          h={isLargerThan1148 ? "100%" : "90%"}
          color={"secondary"}
          marginRight={isLargerThan1148 ? "5rem" : 0}
        >
          <Container padding={"2"} centerContent>
            <Heading textAlign={"center"}>Hi! my name's Cristovão</Heading>
            <Box h="20px" />
            <Text textAlign={"justify"} fontSize={"md"}>
              A lover of technology and games, Looking for an opportunity to
              create innovative products and solutions. I really enjoy being
              self-taught, learning quickly whatever is necessary for the
              project, main focusing on mobile development using Flutter.
            </Text>
            <Box h="20px" />
            <Text textAlign={"justify"} fontSize={"md"}>
              <b>Skills </b>: Flutter, Dart, Javascript, React.Js, Scrum, TDD,
              Clean Code , Clean Architecture etc. More info at my links below:
            </Text>
          </Container>
        </Stack>
      </Flex>

      <Box
        color={"secondary"}
        w={"100%"}
        h="20%"
        bgColor={"placeHoldColor"}
        scale={isLargerThan1148 ? 1 : 0.3}
      >
        <HStack
          h="100%"
          align={"center"}
          w="100%"
          justify={"center"}
          spacing={20}
          transform={isLargerThan800 ? "scale(1)" : "scale(0.5)"}
        >
          {getNetworkItensList()}
        </HStack>
      </Box>
    </BoxAnimated>
  );
};

export default ProfileCard;

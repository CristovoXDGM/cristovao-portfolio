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
import ProfilePic from "/public/images/profilepic.jpeg";

import networkLinks from "../../utils/networkLinks.json";

const networkLinkList: any = networkLinks.networkLinks;

const ProfileCard: React.FC = () => {
  const [isLargerThan1148] = useMediaQuery("(min-width:1300px)");
  const [isLargerThan800] = useMediaQuery("(min-width:800px)");

  const getNetworkItensList = () => {
    return networkLinkList.map((item: any) => (
      <Link
        _hover={{ color: "primaryFocus" }}
        _active={{ color: "primary" }}
        href={item.link_url}
        isExternal
      >
        <Icon icon={item.icon} height={item.icon_height} />
      </Link>
    ));
  };

  return (
    <BoxAnimated
      bgColor={"main"}
      width={isLargerThan1148 ? "55%" : "80%"}
      height={isLargerThan1148 ? "70%" : "77%"}
      // position="absolute"
      // right={0}
      // top={0}
      // bottom={0}
      variants={boxAnimatedVariant}
      initial="hidden"
      animate="visible"
      mx="auto"
      my="auto"
      // boxShadow="0rem 0.3rem 0.8rem #323232"
      borderRadius={"3xl"}
      overflow="hidden"
    >
      <Flex flexDir={"row"} w={"100%"} h="80%">
        <Stack
          spacing={10}
          alignItems={"center"}
          justifyContent={"center"}
          w={isLargerThan1148 ? "50%" : "100%"}
          h={isLargerThan1148 ? "100%" : "90%"}
          color={"secondary"}
          marginLeft={isLargerThan1148 ? "5rem" : 0}
        >
          <Container padding={"4rem"} centerContent>
            <Heading textAlign={"center"}>
              Hi! What's up?<br></br> My name's Cristovão
              <Box h="20px" />
              <Text color={"primaryFocus"} textAlign={"center"} fontSize={"md"}>
                I'm a Mobile Software Engineer with 8 years experience.
                Passionate about App and Game development.
              </Text>
            </Heading>
            <Box h="20px" />
          </Container>
        </Stack>
        <Stack
          display={isLargerThan1148 ? "flex" : "none"}
          alignItems={"center"}
          justifyContent={"center"}
          w="50%"
        >
          <Image
            height={"20rem"}
            width={"15rem"}
            fit={"cover"}
            src={ProfilePic}
            loading="lazy"
          />
        </Stack>
      </Flex>

      <Box
        color={"secondary"}
        w={"100%"}
        h="20%"
        bgColor={"main"}
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

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import projectsJson from "../../utils/personalProjectsObject.json";

const projects = projectsJson.projects;

const CustomCarousel: React.FC = () => {
  const [CarouselIndex, setCarouselIndex] = useState(0);
  const [isWidthLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isHeightLargerThan800] = useMediaQuery("(min-height: 800px)");

  const handleActiveIndex = (selectedIndex: any, e: any) => {
    setCarouselIndex(selectedIndex);
  };

  const slideSizes = {
    width: isWidthLargerThan800 ? 900 : "22rem",
    height: isWidthLargerThan800 ? 580 : 510,
  };

  return (
    <Carousel
      activeIndex={CarouselIndex}
      onSelect={handleActiveIndex}
      indicators={false}
      zIndex={1}
      prevIcon={
        <ChevronLeftIcon
          marginLeft={isWidthLargerThan800 ? "-25rem" : 0}
          color={isWidthLargerThan800 ? "secondary" : "main"}
          boxSize={isWidthLargerThan800 ? 20 : 8}
        />
      }
      nextIcon={
        <ChevronRightIcon
          marginLeft={isWidthLargerThan800 ? "25rem" : 0}
          color={isWidthLargerThan800 ? "secondary" : "main"}
          boxSize={isWidthLargerThan800 ? 20 : 8}
        />
      }
      style={{
        display: "flex",
        ...slideSizes,

        margin: "auto",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {projects.map((project: any) => (
        <Carousel.Item>
          <Box bg={"secondary"} {...slideSizes}>
            <AbsoluteCenter>
              <Flex
                border={"2px"}
                borderColor={"primary"}
                overflow={"hidden"}
                borderRadius={"1.4rem"}
                align={"center"}
                m="auto"
                justify={"center"}
                my="2rem"
                height={"24rem"}
                w={isWidthLargerThan800 ? "100%" : "80%"}
                bgColor={"main"}
              >
                <Image fit={"cover"} src={project.image} alt={project.name} />
              </Flex>
              {isWidthLargerThan800 ? (
                <Heading
                  fontSize={20}
                  marginBottom="2rem"
                  textAlign={"center"}
                  color={"main"}
                >
                  {project.name}
                </Heading>
              ) : (
                <Box></Box>
              )}
              <HStack
                spacing={isWidthLargerThan800 ? "15rem" : "1rem"}
                w={"100%"}
              >
                <Button
                  w={"10rem"}
                  bgColor={"main"}
                  onClick={() => {
                    window.open(project.project_link) ||
                      window.location.replace(project.project_link);
                  }}
                >
                  Project
                </Button>
                <Button
                  w={"10rem"}
                  color="main"
                  border={"2px"}
                  borderColor={"main"}
                  variant="outline"
                  onClick={() => {
                    window.open("https://github.com/CristovoXDGM/", "_blank") ||
                      window.location.replace(
                        "https://github.com/CristovoXDGM/"
                      );
                  }}
                >
                  Github
                </Button>
              </HStack>
            </AbsoluteCenter>
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

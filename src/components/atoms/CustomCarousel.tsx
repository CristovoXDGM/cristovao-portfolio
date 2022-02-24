import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import LinkGenAppImage from "/images/LinkGenPrint.png";

import projectsJson from "../../utils/personalProjectsObject.json";

const projects = projectsJson.projects;

const CustomCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleActiveIndex = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  const slideSizes = {
    width: 900,
    height: 600,
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleActiveIndex}
      indicators={false}
      prevIcon={
        <ChevronLeftIcon
          marginLeft={"-25rem"}
          color={"secondary"}
          boxSize={20}
        />
      }
      nextIcon={
        <ChevronRightIcon
          marginLeft={"25rem"}
          color={"secondary"}
          boxSize={20}
        />
      }
      style={{
        display: "flex",
        ...slideSizes,
        borderRadius: 20,
        margin: "auto",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {projects.map((project: any) => (
        <Carousel.Item>
          <Box bg={"secondary"} borderRadius={"1.4rem"} {...slideSizes}>
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
                bgColor={"main"}
              >
                <Image fit={"cover"} src={project.image} alt={project.name} />
              </Flex>
              <HStack spacing={"15rem"} w={"100%"}>
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

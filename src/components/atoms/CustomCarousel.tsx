import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CustomCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleActiveIndex = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleActiveIndex}
      style={{
        display: "flex",
        width: 800,
        height: 600,
        borderRadius: 20,
        margin: "auto",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <Carousel.Item>
        <Box borderRadius={20} bg={"main"} w={800} h={600}></Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box bg={"#cf1c1c"} w={800} h={600}></Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box bg={"#240606"} w={800} h={600}></Box>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;

import { Link, LinkProps } from "@chakra-ui/react";
import React from "react";

const CustomChakraLink: React.FC<LinkProps> = (props) => {
  return (
    <Link _hover={{ color: "placeHoldColor" }} {...props}>
      {props.children}
    </Link>
  );
};

export default CustomChakraLink;

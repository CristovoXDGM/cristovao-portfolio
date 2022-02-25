import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

import { useNavigate } from "react-router-dom";

const CustomMobileMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant={"outline"}
        bgGradient="linear(to-r,placeHoldColor,primary)"
        _active={{ bgColor: "primaryFocus" }}
        _focus={{ bgColor: "primaryFocus" }}
        _hover={{ bgColor: "primaryFocus" }}
        _selected={{ bgColor: "primaryFocus" }}
      />
      <MenuList>
        <MenuItem
          onClick={() => {
            navigate("/");
          }}
        >
          About me
        </MenuItem>
        <MenuItem
          as={Link}
          href="/docs/CristovaoResume.pdf"
          download={"CristovaoResume.pdf"}
        >
          Download Resume
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </MenuItem>
        <MenuItem as={Link} href="https://dev.to/cristovoxdgm" isExternal>
          Blog
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/");
          }}
        >
          Contacts
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMobileMenu;

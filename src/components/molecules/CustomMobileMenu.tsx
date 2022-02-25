import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const CustomMobileMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant={"outline"}
        bgColor={"primary"}
        _active={{ bgColor: "primaryFocus" }}
        _focus={{ bgColor: "primaryFocus" }}
        _hover={{ bgColor: "primaryFocus" }}
        _selected={{ bgColor: "primaryFocus" }}
      />
      <MenuList>
        <MenuItem>About me</MenuItem>
        <MenuItem>Download Resume</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contacts</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMobileMenu;

import * as React from "react";
import { useEffect, useState } from "react";
import css from "./SystemSidebarNavItem.module.scss";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";

interface IProps {}

function SystemSidebarNavItem(props: IProps) {
  // SECTION: Props
  const {} = props;

  const LinkItems: Array<any> = [
    { name: "Home" },
    { name: "Trending" },
    { name: "Explore" },
    { name: "Favourites" },
    { name: "Settings" },
  ];

  // SECTION: Hooks State - UI
  const [isExpanded, setIsExpaned] = useState<boolean>(false);

  // SECTION: UI Events

  // SECTION: Render
  return (
    <NavItem key={link.name} icon={link.icon}>
      {link.name}
    </NavItem>
  );
}

export default SystemSidebarNavItem;

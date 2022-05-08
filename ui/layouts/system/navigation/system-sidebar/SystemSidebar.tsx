import * as React from "react";
import { useEffect, useState } from "react";
import css from "./SystemSidebar.module.scss";
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

function SystemSidebar(props: IProps) {
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
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(true);

  // SECTION: UI Events

  const NavItem = ({ icon, children, ...rest }: any) => {
    return (
      <Link
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };

  // SECTION: Render
  return (
    <Box position="fixed" h="100%" p={5} bg="#dfdfdf">
      <Drawer
        isOpen={isDrawerOpened}
        onClose={() => setIsDrawerOpened(false)}
        placement="left"
        // returnFocusOnClose={false}
        // autoFocus={false}
      >
        <DrawerContent>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SystemSidebar;

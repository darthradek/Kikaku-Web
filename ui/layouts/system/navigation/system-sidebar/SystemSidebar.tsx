import * as React from "react";
import css from "./SystemSidebar.module.scss";
import {
  Flex,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  DrawerOverlay,
  Spacer,
  Box,
  HStack,
  Avatar,
  IconButton,
  Icon,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import SystemNavItems from "../../../../static-data/SystemNavItems";
interface IProps {
  loggedInUserName: string;
}

function SystemSidebar(props: IProps) {
  // SECTION: Props
  const { loggedInUserName } = props;

  // SECTION: Hooks State - UI
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: UI Events

  // SECTION: Render
  return (
    <Box as="nav">
      <Box px="4" as="header" position="absolute" w="100%" bg="white">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            bg="backgroundSecondary"
            color="backgroundPrimary"
            _hover={{
              bg: "backgroundSecondary",
              color: "backgroundPrimary",
            }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src="/logo.svg" alt="" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {SystemNavItems.systemNavItems.map((navItem, index) => (
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  href={navItem.href}
                  key={index}
                >
                  <Flex
                    align="center"
                    px={4}
                    py={2}
                    rounded={"md"}
                    bg="backgroundPrimary"
                    color="backgroundSecondary"
                    _hover={{
                      textDecoration: "none",
                      bg: "backgroundPrimary",
                      color: "highlightSecondary",
                    }}
                  >
                    <Icon
                      mr="2"
                      fontSize="20"
                      _groupHover={{
                        color: "black",
                      }}
                      as={navItem.icon}
                    />
                    <Text
                      _hover={{
                        textDecoration: "none",
                      }}
                      fontWeight="bold"
                    >
                      {navItem.label}
                    </Text>
                  </Flex>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            {loggedInUserName && (
              <Avatar
                bg="backgroundSecondary"
                color="highlightPrimary"
                name={loggedInUserName[0]}
                size={"md"}
              />
            )}
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        closeOnOverlayClick={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <img src="/logo.svg" className={css.logoBanner} alt="" />
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody mt="8">
              {SystemNavItems.systemNavItems.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Flex
                    align="center"
                    mb="4"
                    p="4"
                    borderRadius="lg"
                    role="group"
                    bg="#e1e8eb"
                    cursor="pointer"
                    _hover={{
                      bg: "#343a40",
                      color: "white",
                    }}
                  >
                    {/* {icon && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                      color: "white",
                    }}
                    as={icon}
                  />
                )} */}
                    {link.label}
                  </Flex>
                </Link>
              ))}
            </DrawerBody>
            <DrawerFooter h="4rem" bg="#e1e8eb">
              <Flex minWidth="max-content" alignItems="center" gap="8">
                <Link href="https://chakra-ui.com" isExternal>
                  Logged in user...
                </Link>
                <Spacer />
                <Button colorScheme="#e1e8eb" bg="#343a40">
                  Log out
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default SystemSidebar;

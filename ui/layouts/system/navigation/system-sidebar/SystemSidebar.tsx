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
  Stack,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import SystemNavItems from "../../../../static-data/SystemNavItem";

interface IProps {}

function SystemSidebar(props: IProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Hooks State - UI
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: UI Events

  // SECTION: Render
  return (
    <>
      <Box px="4" as="header" position="fixed" w="100%" bg="white">
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
                  fontWeight="bold"
                  key={index}
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
                  href={navItem.href}
                >
                  {navItem.label}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Avatar
              size={"md"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
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
    </>
  );
}

export default SystemSidebar;

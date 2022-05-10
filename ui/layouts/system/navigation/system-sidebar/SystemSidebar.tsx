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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SystemNavItems from "../../../../static-data/SystemNavItem";
import Routes from "../../../../../global/Routes";
interface IProps {}

function SystemSidebar(props: IProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Hooks State - UI
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: UI Events

  // SECTION: Render
  return (
    <Box>
      {/* <div className={css.navToggleButton} onClick={}>
        <ChevronRightIcon w="8" h="8" />
      </div> */}
      <Box as="header" position="fixed" w="100%" bg="#F2F2F2">
        <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            {/* <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        /> */}
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Button
              _hover={{
                bg: "#343a40",
                color: "#7952b3",
              }}
              bg="#343a40"
              onClick={onOpen}
            >
              <HamburgerIcon color="#e1e8eb" />
            </Button>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <HStack spacing={8} alignItems={"center"}>
                {SystemNavItems.systemNavItems.map((navItem, index) => (
                  <Link
                    key={index}
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "#343a40",
                      color: "white",
                    }}
                    href={navItem.href}
                  >
                    {navItem.label}
                  </Link>
                ))}
              </HStack>
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <a href={Routes.loginPage}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                bg={"background-primary"}
                _hover={{
                  bg: "#e1e8eb",
                }}
              >
                Sign In
              </Button>
            </a>
            <a href={Routes.registerPage}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"#7952b3"}
                _hover={{
                  bg: "#7952b3",
                }}
              >
                Sign Up
              </Button>
            </a>
          </Stack>
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse> */}
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

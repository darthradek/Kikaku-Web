import * as React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import LandingNavItems from "../../../../static-data/LandingNavItems";
import { ILandingNavItem } from "../../../../../utils/ui-interfaces/landing/ILandingNavItem";
import Routes from "../../../../../global/Routes";
import Router, { useRouter } from "next/router";

interface IProps {}

function LandingNavBar(props: IProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const router = useRouter();

  // SECTION: Hooks State - Data
  const [uiState, setUiState] = useState();

  // SECTION: Hooks Effect - Data
  useEffect(() => {}, []);

  // SECTION: Services

  // SECTION: Services calls
  async function fetchData() {}

  // SECTION: UI Constants & Variables
  const landingNavItems: ILandingNavItem[] = LandingNavItems.landingNavItems;

  // SECTION: Hooks State - UI
  const [isAccountRouteActive, setIsAccountRouteActive] =
    useState<boolean>(true);

  // SECTION: Hooks Effect - UI
  useEffect(() => {
    if (router.pathname === Routes.loginPage) {
      setIsAccountRouteActive(true);
    } else if (router.pathname === Routes.registerPage) {
      setIsAccountRouteActive(true);
    } else {
      setIsAccountRouteActive(false);
    }
  }, [router]);

  // SECTION: UI Events
  function uiEvent() {}

  // SECTION: Render
  return (
    <Box>
      <Flex
        bg="white"
        minH={"5vh"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        {/* <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex> */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <img src="/logo.svg" alt="kikaku-logo" />
          </Text>
          {isAccountRouteActive !== true && (
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <HStack spacing={8} alignItems={"center"}>
                {landingNavItems.map((navItem, index) => (
                  <Link
                    key={index}
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      bg: "backgroundPrimary",
                    }}
                    href={navItem.href}
                  >
                    {navItem.label}
                  </Link>
                ))}
              </HStack>
            </Flex>
          )}
        </Flex>
        {isAccountRouteActive ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {router.pathname === Routes.registerPage && (
              <Flex alignItems="center" gap="4">
                {/* <Text>Dont have account yet?</Text> */}
                <a href={Routes.loginPage}>
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"backgroundSecondary"}
                    _hover={{
                      bg: "highlightPrimary",
                      color: "backgroundSecondary",
                    }}
                  >
                    Sign in
                  </Button>
                </a>
              </Flex>
            )}
            {router.pathname === Routes.loginPage && (
              <Flex alignItems="center" gap="4">
                {/* <Text>Dont have account yet?</Text> */}
                <a href={Routes.registerPage}>
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"backgroundSecondary"}
                    _hover={{
                      bg: "highlightPrimary",
                      color: "backgroundSecondary",
                    }}
                  >
                    Sign Up
                  </Button>
                </a>
              </Flex>
            )}
          </Stack>
        ) : (
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
                bg={"backgroundSecondary"}
                color="backgroundPrimary"
                _hover={{
                  bg: "highlightSecondary",
                  color: "white",
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
                color={"backgroundSecondary"}
                bg={"highlightPrimary"}
                _hover={{
                  bg: "highlightSecondary",
                  color: "backgroundPrimary",
                }}
              >
                Sign Up
              </Button>
            </a>
          </Stack>
        )}
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse> */}
    </Box>
  );
}

export default LandingNavBar;

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

interface IProps {}

function LandingNavBar(props: IProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables

  // SECTION: Hooks State - Data
  const [dataState, setDataState] = useState();

  // SECTION: Hooks Effect - Data
  useEffect(() => {}, []);

  // SECTION: Services

  // SECTION: Services calls
  async function fetchData() {}

  // SECTION: UI Constants & Variables
  const landingNavItems: ILandingNavItem[] = LandingNavItems.landingNavItems;

  // SECTION: Hooks State - UI
  const [uiState, setUiState] = useState();

  // SECTION: Hooks Effect - UI
  useEffect(() => {}, [uiState]);

  // SECTION: UI Events
  function uiEvent() {}

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  // SECTION: Render
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
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
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <img src="/logo.svg" alt="kikaku-logo" />
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <HStack spacing={8} alignItems={"center"}>
              {landingNavItems.map((navItem, index) => (
                <Link
                  key={index}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "#e1e8eb",
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
  );
}

export default LandingNavBar;

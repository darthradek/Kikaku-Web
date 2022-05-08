import React from "react";
import css from "./LandingLayout.module.scss";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import LandingNavBar from "../navigation/landing-nav-bar/LandingNavBar";
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from "@chakra-ui/icons";

interface IProps {
  //   pageMetadata?: Page;
  children: any;
  pageAttribute?: any;
}

function LandingLayout(props: IProps) {
  // MARK: Props
  const { children, pageAttribute } = props;

  //MARK: Render
  return (
    <Box>
      <Box>
        <LandingNavBar />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default LandingLayout;

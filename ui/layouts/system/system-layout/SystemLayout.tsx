import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IUser } from "../../../../utils/interfaces/IUser";
import LandingNavBar from "../../landing/navigation/landing-nav-bar/LandingNavBar";
import SystemSidebar from "../navigation/system-sidebar/SystemSidebar";
import css from "./SystemLayout.module.scss";

interface IProps {
  //   pageMetadata?: Page;
  loggedInUser: IUser;
  children: any;
  pageAttribute?: any;
}

function SystemLayout(props: IProps) {
  // MARK: Props
  const { children, pageAttribute, loggedInUser } = props;

  //MARK: Render
  return (
    <Box>
      <Box>
        <SystemSidebar loggedInUserName={loggedInUser.username} />
      </Box>
      <Box pt="6rem" pl="2rem" pb="2rem" pr={"2rem"} minH="100vh" bg="#343a40">
        {children}
      </Box>
    </Box>
  );
}

export default SystemLayout;

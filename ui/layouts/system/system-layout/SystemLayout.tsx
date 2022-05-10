import { Box } from "@chakra-ui/react";
import React from "react";
import SystemSidebar from "../navigation/system-sidebar/SystemSidebar";
import css from "./SystemLayout.module.scss";

interface IProps {
  //   pageMetadata?: Page;
  children: any;
  pageAttribute?: any;
}

function SystemLayout(props: IProps) {
  // MARK: Props
  const { children, pageAttribute } = props;

  //MARK: Render
  return (
    <Box>
      <Box>
        <SystemSidebar />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default SystemLayout;

import React from "react";
import SystemLayout from "../../layouts/system/system-layout/SystemLayout";
import PageBody from "../PageBody";

interface IProps {
  children: any;
  pageAttribute?: any;
}

function SystemPageHOC(props: IProps) {
  // MARK: Props
  const { children, pageAttribute } = props;

  //MARK: Render
  return (
    <PageBody>
      <SystemLayout>{children}</SystemLayout>
    </PageBody>
  );
}

export default SystemPageHOC;

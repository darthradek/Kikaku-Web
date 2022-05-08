import React from "react";
import LandingLayout from "../../layouts/landing/landing-layout/LandingLayout";
import PageBody from "../PageBody";

interface IProps {
  children: any;
  pageAttribute?: any;
}

function LandingPageHOC(props: IProps) {
  // MARK: Props
  const { children, pageAttribute } = props;

  //MARK: Render
  return (
    <PageBody>
      <LandingLayout>{children}</LandingLayout>
    </PageBody>
  );
}

export default LandingPageHOC;

import React from "react";
import css from "./PageBody.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import SystemLayout from "../../layouts/system/system-layout/SystemLayout";

interface IProps {
  children: any;
  pageAttribute?: any;
}

function PageBody(props: IProps) {
  // MARK: Props
  const { children, pageAttribute } = props;

  //MARK: Render
  return (
    <div>
      <PageBody>
        <SystemLayout>{children}</SystemLayout>
      </PageBody>
    </div>
  );
}

export default PageBody;

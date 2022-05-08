import React from "react";
import SystemSidebar from "../system-sidebar/SystemSidebar";
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
    <div className={css.mainContainer}>
      <div className={css.navWrapper}>
        <SystemSidebar />
      </div>
      <div className={css.pageContent}>{children}</div>
    </div>
  );
}

export default SystemLayout;

import React from "react";

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
    <>
      <div></div>
    </>
  );
}

export default SystemLayout;

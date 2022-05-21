import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import AuthService from "../../../services/AuthService";
import SystemLayout from "../../layouts/system/system-layout/SystemLayout";
import PageBody from "../PageBody";

interface ISystemPageProps {
  loggedInUser: any;
  page?: any;
}

export interface ISystemPageHOCProps {
  systemPageProps: ISystemPageProps;
  children?: any;
}

function SystemPageHOC(props: ISystemPageHOCProps) {
  // MARK: Props
  const { systemPageProps, children } = props;
  const { loggedInUser, page } = systemPageProps;

  //MARK: Render
  return (
    <>
      {systemPageProps ? (
        <PageBody>
          <SystemLayout>{children}</SystemLayout>
        </PageBody>
      ) : (
        <>error</>
      )}
    </>
  );
}

// SystemPageHOC.getInitialProps = async (ctx: NextPageContext) => {
//   const tokenService = new AuthService();
//   await tokenService.validateTokenSSR(ctx);
//   return {};
// };

export const systemPageServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const tokenService = new AuthService();
  await tokenService.validateTokenSSR(ctx).then((response) => {
    // console.log("cipa", JSON.stringify(response));
  });

  const loggedInUser: any = "some user";
  console.log("loggedInUser", loggedInUser);

  const systemPageProps: ISystemPageHOCProps = {
    systemPageProps: {
      // page: AdminPagesMetadata.getPageMetadata(ctx.req.url),
      loggedInUser: loggedInUser,
    },
  };
  return JSON.parse(JSON.stringify({ props: systemPageProps }));
};

export default SystemPageHOC;

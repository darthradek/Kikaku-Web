import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router from "next/router";
import React from "react";
import Routes from "../../../global/Routes";
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
  const authService = new AuthService();
  const response = authService.validateTokenSSR(ctx);

  console.log("loggedInUser", response);

  const loggedInUser: any = "Andrew Sampel";

  const systemPageProps: ISystemPageHOCProps = {
    systemPageProps: {
      // page: AdminPagesMetadata.getPageMetadata(ctx.req.url),
      loggedInUser: loggedInUser,
    },
  };
  return JSON.parse(JSON.stringify({ props: systemPageProps }));

  // if (response) {
  //   console.log("loggedInUser", response);

  //   const loggedInUser: any = "Andrew Sampel";

  //   const systemPageProps: ISystemPageHOCProps = {
  //     systemPageProps: {
  //       // page: AdminPagesMetadata.getPageMetadata(ctx.req.url),
  //       loggedInUser: loggedInUser,
  //     },
  //   };
  //   return JSON.parse(JSON.stringify({ props: systemPageProps }));
  // } else {
  //   if (ctx.res) {
  //     ctx.res.writeHead(302, { location: Routes.loginPage });
  //     ctx.res.end();
  //   } else {
  //     Router.replace(Routes.loginPage);
  //   }
  // }
};

export default SystemPageHOC;

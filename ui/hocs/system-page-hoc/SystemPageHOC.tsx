import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router from "next/router";
import React from "react";
import Routes from "../../../global/Routes";
import AuthService from "../../../services/AuthService";
import { IUser } from "../../../utils/interfaces/IUser";
import SystemLayout from "../../layouts/system/system-layout/SystemLayout";
import PageBody from "../PageBody";

interface ISystemPageProps {
  token: string;
  loggedInUser: IUser;
  page?: any;
}

export interface ISystemPageHOCProps {
  systemPageProps: ISystemPageProps;
  children?: any;
}

function SystemPageHOC(props: ISystemPageHOCProps) {
  // MARK: Props
  const { systemPageProps, children } = props;
  const { loggedInUser, token, page } = systemPageProps;

  //MARK: Render
  return (
    <>
      {systemPageProps ? (
        <PageBody>
          <SystemLayout loggedInUser={loggedInUser}>{children}</SystemLayout>
        </PageBody>
      ) : (
        <>error</>
      )}
    </>
  );
}

export const systemPageServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const authService = new AuthService();
  const response = await authService.validateTokenSSR(ctx);
  const loggedInUser: IUser = response?.user[0];
  const token: string = response?.token;

  if (loggedInUser) {
    const systemPageProps: ISystemPageHOCProps = {
      systemPageProps: {
        token: token,
        loggedInUser: loggedInUser,
        // page: AdminPagesMetadata.getPageMetadata(ctx.req.url),
      },
    };
    return JSON.parse(JSON.stringify({ props: systemPageProps }));
  } else {
    if (ctx.res) {
      ctx.res.writeHead(302, { location: Routes.loginPage });
      ctx.res.end();
    } else {
      Router.replace(Routes.loginPage);
    }
  }
};

export default SystemPageHOC;

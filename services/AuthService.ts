import { GetServerSidePropsContext, NextPageContext } from "next";
import { Router } from "next/router";
import Cookies from "universal-cookie";
import Routes from "../global/Routes";
import FetchService from "./core/FetchService";

class AuthService {
  public saveToken(token: string) {
    const cookies = new Cookies();
    cookies.set("token", token, { path: "/" });
    return Promise.resolve();
  }

  public async authenticateToken(token: string): Promise<any> {
    const response = FetchService.fetchAuthed(`/authenticate`, token, "GET");
    return await response;
  }

  public async validateTokenSSR(ctx: GetServerSidePropsContext) {
    const cookies = new Cookies(ctx.req ? ctx.req.headers.cookie : null);
    const token = cookies.get("token");
    if (token) {
      const response = this.authenticateToken(token);
      return response;
    }
  }
}

export default AuthService;

import { GetServerSidePropsContext, NextPageContext } from "next";
import Cookies from "universal-cookie";
import FetchService from "./core/FetchService";

class AuthService {
  public saveToken(token: string) {
    const cookies = new Cookies();
    cookies.set("token", token, { path: "/" });
    return Promise.resolve();
  }

  // public async authenticateToken(token: string): Promise<any> {
  //   return FetchService.fetch("/api/users/authenticate/", "GET", token);
  // }

  public async validateTokenSSR(ctx: GetServerSidePropsContext) {
    const cookies = new Cookies(ctx.req ? ctx.req.headers.cookie : null);
    const token = cookies.get("token");
    console.log(token);
    // const response = await this.authenticateToken(token);
    // console.log(response);
    // return response;

    // const navService = new NavService();
    // navService.redirectUser('/', ctx);
  }
}

export default AuthService;

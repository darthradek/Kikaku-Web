import { ILoginUserDTO } from "../utils/dtos/user/ILoginUserDTO";
import { IRegisterUserDTO } from "../utils/dtos/user/IRegisterUserDTO";
import FetchService from "./core/FetchService";

class UserService {
  private readonly userUrl: string = "/users";

  public async registerUser(data: IRegisterUserDTO) {
    const response = FetchService.fetch(
      this.userUrl + `/register`,
      "POST",
      data
    );
    return await response;
  }

  public async loginUser(data: ILoginUserDTO) {
    const response = FetchService.fetch(this.userUrl + `/login`, "POST", data);
    return await response;
  }
}

export default UserService;

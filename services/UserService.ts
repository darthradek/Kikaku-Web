import { ILoginUserDTO } from "../utils/dtos/user/LoginUserDTO";
import { IRegisterUserDTO } from "../utils/dtos/user/RegisterUserDTO";

class UserService {
  private readonly userUrl: string = "/api/users";

  public async registerUser(data: IRegisterUserDTO) {
    const response = await fetch(this.userUrl + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  public async loginUser(data: ILoginUserDTO) {
    const response = await fetch(this.userUrl + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  public async getAllUsers() {
    const response = await fetch(this.userUrl);
    return await response.json();
  }
}

export default UserService;

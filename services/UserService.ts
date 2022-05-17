import { IRegisterUserDTO } from "../utils/dtos/RegisterUserDTO";

class UserService {
  private readonly userUrl: string = "/api/users";

  public async getAllUsers() {
    const response = await fetch(this.userUrl);
    return await response.json();
  }

  public async getWelcome() {
    const response = await fetch("/api/welcome");
    return await response.json();
  }

  public async registerUser(data: IRegisterUserDTO) {
    const response = await fetch(this.userUrl + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}

export default UserService;

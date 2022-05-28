import { ICreateTeamDTO } from "../utils/dtos/team/ICreateTeamDTO";
import AuthService from "./AuthService";
import FetchService from "./core/FetchService";

class TeamService {
  private readonly teamUrl: string = "/teams";

  public async createTeam(data: ICreateTeamDTO) {
    const response = FetchService.fetchAuthed(
      this.teamUrl + `/create`,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcnQiLCJpYXQiOjE2NTA0ODExNDMsImV4cCI6MzMwMTMyMjI4NiwiaXNzIjoiY29vbElzc3VlciJ9.Qqgzu_D1NFXWXzz8jXnuRosraa8tlDBL_FmGi6Gu3Hs",
      "POST",
      data
    );
    return await response;
  }
}

export default TeamService;

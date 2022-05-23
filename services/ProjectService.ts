import { ICreateProjectDTO } from "../utils/dtos/project/ICreateProjectDTO";
import FetchService from "./core/FetchService";

class ProjectService {
  private readonly projectUrl: string = "/api/projects";

  public async createProject(data: ICreateProjectDTO) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/create`,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcnQiLCJpYXQiOjE2NTA0ODExNDMsImV4cCI6MzMwMTMyMjI4NiwiaXNzIjoiY29vbElzc3VlciJ9.Qqgzu_D1NFXWXzz8jXnuRosraa8tlDBL_FmGi6Gu3Hs",
      "POST",
      data
    );
    return await response;
  }

  public async getProjectById(projectId: string) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/` + projectId,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcnQiLCJpYXQiOjE2NTA0ODExNDMsImV4cCI6MzMwMTMyMjI4NiwiaXNzIjoiY29vbElzc3VlciJ9.Qqgzu_D1NFXWXzz8jXnuRosraa8tlDBL_FmGi6Gu3Hs",
      "GET"
    );
    return await response;
  }

  public async getAllProjectsCreatedByUser(userId: string) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/createdBy/` + userId,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcnQiLCJpYXQiOjE2NTA0ODExNDMsImV4cCI6MzMwMTMyMjI4NiwiaXNzIjoiY29vbElzc3VlciJ9.Qqgzu_D1NFXWXzz8jXnuRosraa8tlDBL_FmGi6Gu3Hs",
      "GET"
    );
    return await response;
  }
}

export default ProjectService;

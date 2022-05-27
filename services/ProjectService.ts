import { ICreateProjectDTO } from "../utils/dtos/project/ICreateProjectDTO";
import FetchService from "./core/FetchService";

class ProjectService {
  private readonly projectUrl: string = "projects";

  public async createProject(data: ICreateProjectDTO, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/create`,
      token,
      "POST",
      data
    );
    return await response;
  }

  public async getProjectById(projectId: string, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/` + projectId,
      token,
      "GET"
    );
    return await response;
  }

  public async getAllProjectsCreatedByUser(userId: string, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/createdBy/` + userId,
      token,
      "GET"
    );
    return await response;
  }

  public async deleteProjectById(projectId: string, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectUrl + `/delete/` + projectId,
      token,
      "DELETE"
    );
    return await response;
  }
}

export default ProjectService;

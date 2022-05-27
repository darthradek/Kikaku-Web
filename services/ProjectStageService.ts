import { ICreateProjectStageDTO } from "../utils/dtos/project-stage/ICreateProjectStageDTO";
import FetchService from "./core/FetchService";

class ProjectStageService {
  private readonly projectStageUrl: string = "projectStages";

  public async createProjectStage(data: ICreateProjectStageDTO, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectStageUrl + `/create`,
      token,
      "POST",
      data
    );
    return await response;
  }

  public async getAllProjectStagesForProject(projectId: string, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectStageUrl + `/` + projectId,
      token,
      "GET"
    );
    return await response;
  }
}

export default ProjectStageService;

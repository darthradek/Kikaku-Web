import { ICreateProjectStageDTO } from "../utils/dtos/project-stage/ICreateProjectStageDTO";
import { IUpdateProjectStageDTO } from "../utils/dtos/project-stage/IUpdateProjectStageDTO";
import FetchService from "./core/FetchService";

class ProjectStageService {
  private readonly projectStageUrl: string = "/projectStages";

  public async createProjectStage(data: ICreateProjectStageDTO, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectStageUrl + `/create`,
      token,
      "POST",
      data
    );
    return await response;
  }

  public async updateProjectStage(
    data: IUpdateProjectStageDTO,
    token: string,
    projectStageId?: string
  ) {
    const response = FetchService.fetchAuthed(
      this.projectStageUrl + `/update/` + projectStageId,
      token,
      "PUT",
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

  public async deleteProjectStageById(projectStageId: string, token: string) {
    const response = FetchService.fetchAuthed(
      this.projectStageUrl + `/delete/` + projectStageId,
      token,
      "DELETE"
    );
    return await response;
  }
}

export default ProjectStageService;

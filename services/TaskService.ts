import { ICreateTaskDTO } from "../utils/dtos/task/ICreateTaskDTO";
import FetchService from "./core/FetchService";

class TaskService {
  private readonly taskUrl: string = "/tasks";

  public async createTask(data: ICreateTaskDTO, token: string) {
    const response = FetchService.fetchAuthed(
      this.taskUrl + `/create`,
      token,
      "POST",
      data
    );
    return await response;
  }

  public async deleteTaskById(taskId: string, token: string) {
    const response = FetchService.fetchAuthed(
      this.taskUrl + `/delete/` + taskId,
      token,
      "DELETE"
    );
    return await response;
  }
}

export default TaskService;

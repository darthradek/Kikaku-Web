import { ITask } from "./ITask";

export interface IProjectStage {
  _id: string;
  title: string;
  tasks: ITask[];
  project_id: string;
  created_at: string;
}

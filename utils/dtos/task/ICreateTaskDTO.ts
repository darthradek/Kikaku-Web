import { IUser } from "../../interfaces/IUser";

export interface ICreateTaskDTO {
  title: string;
  content: string;
  status: number;
  isOptional: boolean;
  assigned_users: IUser[];
  deadline: string;
  created_by: string;
}

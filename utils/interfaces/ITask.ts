import { IUser } from "./IUser";

export interface ITask {
  _id: string;
  title: string;
  content: string;
  deadline: string;
  status: number;
  assigned_users?: IUser[];
  created_by: IUser;
  created_at: string;
}

import { IUser } from "./IUser";

export interface IProject {
  _id: string;
  description: string;
  name: string;
  objective: string;
  deadline: string;
  created_at: string;
  created_by: IUser;
}

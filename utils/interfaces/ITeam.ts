import { IUser } from "./IUser";

export interface ITeam {
  _id: string;
  name: string;
  description: string;
  members: IUser[];
  leader: IUser;
  created_by: IUser;
  created_at: string;
}

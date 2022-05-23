export interface ICreateProjectDTO {
  name: string;
  objective: string;
  description: string;
  status?: number;
  deadline: string;
  team?: string;
  created_by: string;
}

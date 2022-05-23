export interface ICreateTeamDTO {
  name: string;
  objective: string;
  description: string;
  status?: 1;
  deadline: string;
  team?: string;
  created_by: string;
}

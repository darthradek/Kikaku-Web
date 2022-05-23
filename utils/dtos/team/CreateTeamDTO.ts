export interface CreateTeamDTO {
  name: string;
  description: string;
  members: Array<string>;
  leader: string;
  created_by: string;
}

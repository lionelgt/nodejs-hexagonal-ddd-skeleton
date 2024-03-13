export type GitRepoOwnerResponse = {
  login: string;
  url: string;
};
export type GitRepoResponse = {
  name: string;
  full_name: string;
  owner: GitRepoOwnerResponse;
};

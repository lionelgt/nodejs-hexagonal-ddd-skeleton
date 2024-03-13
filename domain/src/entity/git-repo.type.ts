export type GitRepoOwner = {
  login: string;
  url: string;
};

export type GitRepo = {
  name: string;
  full_name: string;
  owner: GitRepoOwner;
};

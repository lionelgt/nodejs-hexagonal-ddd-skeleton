import { GitRepo } from '../entity/git-repo.type';

export interface GitRepoPort {
  info(): Promise<GitRepo>;
}

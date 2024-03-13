import { GitRepo } from '../entity/git-repo.type';

export interface GitRepoUseCase {
  info(): Promise<GitRepo>;
}

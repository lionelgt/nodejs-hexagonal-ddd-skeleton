import { Injectable } from '@nestjs/common';

import { GitRepo } from '../entity/git-repo.type';
import { GitRepoUseCase } from './git-repo.use-case';
import { GitRepoPort } from '../driven-port/git-repo.port';

@Injectable()
export class GitRepoUseCaseImpl implements GitRepoUseCase {
  private readonly gitRepoPort: GitRepoPort = null;

  async info(): Promise<GitRepo> {
    return this.gitRepoPort.info();
  }
}

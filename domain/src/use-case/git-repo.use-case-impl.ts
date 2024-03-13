import { Injectable } from '@nestjs/common';

import { GitRepo } from '../entity/git-repo.type';
import { GitRepoUseCase } from './git-repo.use-case';
import { GitRepoPort } from '../driven-port/git-repo.port';
import { InjectAdapter } from '../decorator/inject-adapter.decorator';

@Injectable()
export class GitRepoUseCaseImpl implements GitRepoUseCase {
  @InjectAdapter()
  private readonly gitRepoPort: GitRepoPort = null;

  async info(): Promise<GitRepo> {
    return this.gitRepoPort.info();
  }
}

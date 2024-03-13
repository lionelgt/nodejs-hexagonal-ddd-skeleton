import { Controller, Get, Inject } from '@nestjs/common';
import { GitRepoResponse } from '../type/git-repo.type';
import { GitRepoUseCase } from '@skeleton/domain';

@Controller('api/git-repository')
export class GitRepoController {
  constructor(
    @Inject('gitRepoUseCase') private readonly gitRepoUseCase: GitRepoUseCase,
  ) {}

  @Get()
  async info(): Promise<GitRepoResponse> {
    return this.gitRepoUseCase.info();
  }
}

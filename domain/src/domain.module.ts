import { Module } from '@nestjs/common';
import { GitRepoUseCaseImpl } from './use-case/git-repo.use-case-impl';

@Module({
  providers: [{ provide: 'gitRepoUseCase', useClass: GitRepoUseCaseImpl }],
  exports: ['gitRepoUseCase'],
})
export class DomainModule {}

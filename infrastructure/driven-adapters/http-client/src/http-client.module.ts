import { Module } from '@nestjs/common';
import { GitRepoAdapter } from './adapter/git-repo.adapter';
import { DomainModule } from '@skeleton/domain';
import { GitHubClient } from './client/git-hub.client';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, DomainModule],
  providers: [
    { provide: 'gitRepoPort', useClass: GitRepoAdapter },
    GitHubClient,
  ],
  exports: ['gitRepoPort'],
})
export class HttpClientModule {}

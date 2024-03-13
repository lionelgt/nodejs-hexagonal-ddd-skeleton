import { Injectable } from '@nestjs/common';
import { GitRepoPort, GitRepo } from '@skeleton/domain';
import { GitHubClient } from '../client/git-hub.client';

@Injectable()
export class GitRepoAdapter implements GitRepoPort {
  constructor(private readonly gitHubClient: GitHubClient) {}
  async info(): Promise<GitRepo> {
    return this.gitHubClient.info();
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { parse } from '../schema/git-hub.schema';

@Injectable()
export class GitHubClient {
  constructor(private readonly httpService: HttpService) {}

  async info(): Promise<any> {
    const response = await this.httpService
      .get(
        'https://api.github.com/repos/lionelgt/nodejs-hexagonal-ddd-skeleton',
      )
      .toPromise();
    const result = parse(response.data);
    if (!result.success) {
      throw new Error('Data response are inconsistent');
    }
    return result.data;
  }
}

import { Module } from '@nestjs/common';
import { GitRepoController } from './controller/git-repo.controller';
import { DomainModule } from '@skeleton/domain';
@Module({
  imports: [DomainModule],
  controllers: [GitRepoController],
})
export class RestApiModule {}

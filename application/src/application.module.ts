import { Module } from '@nestjs/common';
import { HttpClientModule } from '@skeleton/http-client';
import { RestApiModule } from '@skeleton/rest-api';
import { DomainInjectAdapterInitializer } from './decorator/inject-adapter.initializer';

@Module({
  imports: [HttpClientModule, RestApiModule],
  providers: [DomainInjectAdapterInitializer],
})
export class ApplicationModule {}

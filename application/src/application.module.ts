import { Module } from '@nestjs/common';
import { HttpClientModule } from '@skeleton/http-client';
import { RestApiModule } from '@skeleton/rest-api';

@Module({
  imports: [HttpClientModule, RestApiModule],
})
export class ApplicationModule {}

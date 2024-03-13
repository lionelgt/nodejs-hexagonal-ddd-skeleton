import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApplicationModule } from '../src/application.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/git-repository (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/git-repository')
      .expect(200)
      .expect({
        name: 'nodejs-hexagonal-ddd-skeleton',
        full_name: 'lionelgt/nodejs-hexagonal-ddd-skeleton',
        owner: {
          login: 'lionelgt',
          url: 'https://api.github.com/users/lionelgt',
        },
      });
  });
});

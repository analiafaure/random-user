import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { UsersService } from '../../src/users/users.service';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    usersService = app.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users - default count', () => {
    return request(app.getHttpServer())
      .get('/users?count=10') 
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBe(10); 
      });
  });

  it('/users - specific count', () => {
    const specificCount = 5;
    return request(app.getHttpServer())
      .get(`/users?count=${specificCount}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBe(specificCount); 
        res.body.forEach(user => {
          expect(user).toHaveProperty('id');
          expect(user).toHaveProperty('name');
          expect(user).toHaveProperty('email');
          expect(user).toHaveProperty('address');
          expect(user).toHaveProperty('phone');
        });
      });
  });

  it('/users - invalid count (negative number)', () => {
    const invalidCount = -5;
    return request(app.getHttpServer())
      .get(`/users?count=${invalidCount}`)
      .expect(400) 
      .expect((res) => {
        expect(res.body.message).toBe('Invalid count parameter'); 
      });
  });

  it('/users - invalid count (not a number)', () => {
    const invalidCount = 'abc';
    return request(app.getHttpServer())
      .get(`/users?count=${invalidCount}`)
      .expect(400) 
      .expect((res) => {
        expect(res.body.message).toBe('Invalid count parameter'); 
      });
  });

  it('/users - internal server error ', async () => {
    jest.spyOn(usersService, 'generateUsers').mockImplementationOnce(() => {
      throw new Error('Internal Server Error');
    });

    return request(app.getHttpServer())
      .get('/users')
      .expect(500);
  });
});

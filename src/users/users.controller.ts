import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { UsersInterface } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {}

  @Get()
  getUsers(@Query('count') count?: string): UsersInterface[] {
    const defaultUserCount = this.configService.get<number>('DEFAULT_USER_COUNT');
    const userCount = count ? parseInt(count, 10) : defaultUserCount;

    if (isNaN(userCount) || userCount < 1) {
      throw new BadRequestException('Invalid count parameter');
    }

    return this.usersService.generateUsers(userCount);
  }
}
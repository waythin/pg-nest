import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ResponseService } from 'src/common/response.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ResponseService]
})
export class UsersModule {}

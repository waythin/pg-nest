import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseService } from '../common/response.service'; // Import ResponseService

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UsersService,
        private readonly responseService: ResponseService,

    ){}


    @Get('list')
    list() : object{
        return this.userService.userList();
    }

    @Get('ggwp')
    getUsers() {
      const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
      let dope = "ggwp";
      if(dope){
        return this.responseService.responseWithError(null, 'Throwing Error msg');
      }
      return this.responseService.responseWithSuccess(users, 'Users retrieved successfully');
    }

}

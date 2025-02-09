import { Injectable } from '@nestjs/common';
import { ResponseService } from '../common/response.service';


@Injectable()
export class UsersService {
    constructor(private readonly responseService: ResponseService) {}


    userList(): object {
        return [
            {
                name: 'ari',
            },
        ];
    }

    getUsers() {
        const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
        return this.responseService.responseWithSuccess(users, 'Users retrieved successfully');
      }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    userList(): object {
        return [{
            "name": "ari"
        }
        ]
    }
}

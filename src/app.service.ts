import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return [{
      'name' : 'edward',
      'age' : 25,
    }];
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  responseWithSuccess<T>(data: T, message: string, status = 200) {
    return {
      success: true,
      data,
      message,
      code: status,
    };
  }

  responseWithError<T>(data: T | null, message: string, status = 400) {
    return {
      success: false,
      data,
      message,
      code: status,
    };
  }
}
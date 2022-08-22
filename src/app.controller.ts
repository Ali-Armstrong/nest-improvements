import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './business.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("error")
  throwError(): string{
    const userId = 1;
    throw new BusinessException(
      'users',                                 // Error domain
      `User with id=${userId} was not found.`, // Internal message
      'User not found',                        // API message
      HttpStatus.NOT_FOUND,                    // HTTP status
    );
  }
}

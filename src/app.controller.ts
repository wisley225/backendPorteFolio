import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dto/createUSers.dto';
@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  createUser(@Body() user: User) {
    return this.appService.create(user);
  }

  @Get()
findAll(){
  return this.appService.findAll()
}

  getHello(): string {
    return this.appService.getHello();
  }
}


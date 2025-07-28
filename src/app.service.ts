import { Injectable } from '@nestjs/common';
import { User } from './dto/createUSers.dto';
import { EmailService } from './email/email.service';

@Injectable()
export class AppService {
private users:User[]=[]
constructor (private readonly EmailService:EmailService){}
  getHello():string{
    return 'Hello World!';
  }

  async create(user: User) {
    this.users.push(user);
    await this.EmailService.sendUserNotification(user);
    return {
      message: 'le backend a belle et bien recu les donnes',
      data: this.users,
    };
  }

  findAll(): User[] {
    return this.users;
  }


}



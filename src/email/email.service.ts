import { Injectable } from '@nestjs/common';
import { User } from 'src/dto/createUSers.dto';
import *as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'lewisguei67@gmail.com',    
        pass: 'oqmmarkkrbmyfsil', 
      },
    });
  }

  async sendUserNotification(user:User) {
    const mailOptions = {
      from: '"nestJS notifier" <lewisguei67@gmail.com>',
      to: 'lewisguei67@gmail.com',
      subject: 'nouvel utilisateur inscrit',
      text: `Nom: ${user.nom}
            \nEmail:  ${user.email}
            \n${user.message}
            veuillez me contacter au ${user.contact}
             `,
    };
    return this.transporter.sendMail(mailOptions);
  }
}

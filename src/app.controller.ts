import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Column, Entity } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getCity')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Entity()
export class city {
  @Column()
  name: string;
}

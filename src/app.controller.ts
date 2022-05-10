import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('alo')
  alo(): string {
    return this.appService.Hola()
  }

  @Get('cha')
  chachis(): string {
    return "chachis"
  }

  @Get('lobbys')
  getLobbys() {
    return this.appService.getLobbys()
  }

}

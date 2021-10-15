import { Controller, Get, Post, Req, All } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  name = 'Free TON Notification provider API';

  constructor(private readonly appService: AppService) {}

  @Get() getHello(@Req() req: Request): string {
    console.log(this.appService.explainRequest(req));
    return `${this.name}: get`;
  }

  @Post() create(@Req() req: Request): string {
    console.log(this.appService.explainRequest(req));
    return `${this.name}: post`;
  }

  @All() logging(@Req() req: Request): string {
    console.log(this.appService.explainRequest(req));
    return `${this.name}: ${req.method}`;
  }
}

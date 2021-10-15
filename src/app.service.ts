import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Free TON Notification provider API';
  }

  explainRequest(req: Request): string {
    return `${req.method} ${req.protocol}://${req.hostname}(${req.ip})${
      req.url
    } ${JSON.stringify(req.params)}`;
  }
}

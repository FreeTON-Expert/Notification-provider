import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/private.key'),
    cert: fs.readFileSync('./secrets/certificate.crt'),
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions,
  });
  await app.listen(443);
}
bootstrap();

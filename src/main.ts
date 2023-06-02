import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.prod' }); // prod.env 파일 로드
  } else {
    dotenv.config({ path: '.env.dev' }); // dev.env 파일 로드
  }

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.SERVER_PORT;
  await app.listen(port);

  Logger.log(`Application running on port ${port}`);
}
bootstrap();

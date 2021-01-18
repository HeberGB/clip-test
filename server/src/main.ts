import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from './config/config.service';
import { ValidationPipe } from '@nestjs/common';
import { MongoExceptionFilter } from './util/filter/error/mongo-exception.filter';
import { ValidationExceptionFilter } from './util/filter/error/validation-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService.name);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new MongoExceptionFilter());
  app.useGlobalFilters(new ValidationExceptionFilter());
  await app.listen(config.env.APP_PORT);
}
bootstrap();

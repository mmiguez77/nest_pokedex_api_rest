import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // transforma los string a number
      transformOptions: {
        enableImplicitConversion: true // realiza las conversiones basado en los TS type
      }
    })
  );
  await app.listen(3000);
}
bootstrap();

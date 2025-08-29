import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o ValidationPipe globalmente.
  // Isso fará com que nossos DTOs sejam validados automaticamente em todas as rotas.
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

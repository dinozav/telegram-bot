import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bot } from './bot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await bot.launch();

  await app.listen(3000);
}

bootstrap();

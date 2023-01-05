import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CityModule } from './city/city.module';

async function bootstrap() {
  const app = await NestFactory.create(CityModule);
  await app.listen(3000);
}
bootstrap();

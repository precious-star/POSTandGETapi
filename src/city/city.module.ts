import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'anmolgupta',
      password: 'Pass@123',
      database: 'postgres',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([City]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}

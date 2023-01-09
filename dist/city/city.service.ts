import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { city } from 'src/app.controller';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City) private readonly cityrepo: Repository<City>,
  ) {}

  create(createCityDto: CreateCityDto): Promise<city> {
    const city = new City();
    city.name = createCityDto.name;
    return this.cityrepo.save(city);
  }

  findAll(): Promise<city[]> {
    return this.cityrepo.find();
  }

  findOne(id: number) {
    return this.cityrepo.find({
      where: {
        cityId: id,
      },
    });
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}

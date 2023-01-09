import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { map } from 'rxjs';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private httpService: HttpService,
  ) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const res = await this.cityService.findOne(+id);
    const name = res[0].name;
    const weather = await this.httpService
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8ca94a30c0cd677413671c785b59b5a0`,
      )
      .pipe(
        map((response) => response.data),
        map((data) => data),
      );
    return weather;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}

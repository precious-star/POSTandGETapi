import { city } from 'src/app.controller';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
export declare class CityService {
    private readonly cityrepo;
    constructor(cityrepo: Repository<City>);
    create(createCityDto: CreateCityDto): Promise<city>;
    findAll(): Promise<city[]>;
    findOne(id: number): string;
    update(id: number, updateCityDto: UpdateCityDto): string;
    remove(id: number): string;
}

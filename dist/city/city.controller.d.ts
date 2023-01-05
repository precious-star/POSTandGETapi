import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(createCityDto: CreateCityDto): Promise<import("../app.controller").city>;
    findAll(): Promise<import("../app.controller").city[]>;
    findOne(id: string): string;
    update(id: string, updateCityDto: UpdateCityDto): string;
    remove(id: string): string;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("./entities/city.entity");
let CityService = class CityService {
    constructor(cityrepo) {
        this.cityrepo = cityrepo;
    }
    create(createCityDto) {
        const city = new city_entity_1.City();
        city.name = createCityDto.name;
        return this.cityrepo.save(city);
    }
    findAll() {
        return this.cityrepo.find();
    }
    findOne(id) {
        return `This action returns a #${id} city`;
    }
    update(id, updateCityDto) {
        return `This action updates a #${id} city`;
    }
    remove(id) {
        return `This action removes a #${id} city`;
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const city_module_1 = require("./city/city.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(city_module_1.CityModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
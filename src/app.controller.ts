import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('learn')
  newEndpoint() {
    return 'Aprendiendo Nest.js';
  }
  @Get('/ruta/')
  ruta() {
    return 'Aprendiendo Nest.js con slashes';
  }
}

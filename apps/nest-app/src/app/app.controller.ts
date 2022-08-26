import { Controller, Get, Query } from '@nestjs/common';

import { WelcomeMessage } from '@mono-repo/common';
import { AppService } from './app.service';

@Controller('nest')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query('appName') appName: string): WelcomeMessage {
    return this.appService.getData(appName);
  }
}

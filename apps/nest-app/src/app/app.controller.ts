import { Controller, Get, Query } from '@nestjs/common';

import { WelcomeMessage } from '@mono-repo/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query('appName') appName: string): WelcomeMessage {
    return this.appService.getData(appName);
  }
}

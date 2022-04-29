import { common, common2 } from '@mono-repo/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to nest-app!"', () => {
      const appController = app.get<AppController>(AppController);
      const appName = 'appName';
      expect(appController.getData(appName)).toEqual({
        id: `${common()} - ${common2()}`,
        message: `Hello ${appName} from Nest app`
      });
    });
  });
});

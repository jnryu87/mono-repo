import { common, common2 } from '@mono-repo/common';
import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to nest-app!"', () => {
      const appName = 'appName';
      expect(service.getData(appName)).toEqual({
        id: `${common()} - ${common2()}`,
        message: `Hello ${appName} from Nest app`
      });
    });
  });
});

import { Injectable } from '@nestjs/common';

import { common, common2, WelcomeMessage } from '@mono-repo/common';

@Injectable()
export class AppService {
  getData(): WelcomeMessage {
    return {
      id: `${common()} - ${common2()}`,
      message: 'Nest app'
    };
  }
}

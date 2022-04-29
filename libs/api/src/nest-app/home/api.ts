import axios from 'axios';

import { WelcomeMessage } from '@mono-repo/common';

export async function getHome(appName: string): Promise<WelcomeMessage> {
  try {
    const response = await axios.get('http://localhost:3333/api', { params: { appName }});
    return response.data;
  } catch(e) {
    throw e;
  }
}

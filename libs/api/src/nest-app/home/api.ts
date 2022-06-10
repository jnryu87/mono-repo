import axios from 'axios';

import { WelcomeMessage } from '@mono-repo/common';
import { backendUrl } from '../../config';

export async function getHome(appName: string): Promise<WelcomeMessage> {
  try {
    const response = await axios.get(`${backendUrl}/api`, { params: { appName }});
    return response.data;
  } catch(e) {
    throw e;
  }
}

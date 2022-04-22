import axios from 'axios';
import { WelcomeMessage } from '@mono-repo/common';

export async function getHome(app: string): Promise<void> {
  const message = await axios.get('http://localhost:3333/api');
  console.log('message', message);
}

import { useEffect, useState } from "react";

import { common, common2, WelcomeMessage } from "@mono-repo/common";

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [message, setMessage] = useState<WelcomeMessage>({
    id: 'React',
    message: 'Hallo'
  });

  useEffect(() => {
    console.log('common', common());
    console.log('common2', common2());
  }, []);

  return (
    <p>{message.id} - {message.message}</p>
  );
}

export default Home;

import { useEffect, useState } from "react";

import { WelcomeMessage } from "@mono-repo/common";
import { getHome } from "@mono-repo/api";

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [message, setMessage] = useState<WelcomeMessage>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setMessage(await getHome('React'));
    };    

    getData();
  }, []);

  return (
    <p>{message?.message}</p>
  );
}

export default Home;

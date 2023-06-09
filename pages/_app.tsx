import "normalize.css/normalize.css";

import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { RouterCheck } from "@/components/router-check/router-check";
const monsterrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${monsterrat.style.fontFamily};
          height: 100%;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
      `}</style>
      <RouterCheck>
        <Component {...pageProps} />
      </RouterCheck>
    </>
  );
}

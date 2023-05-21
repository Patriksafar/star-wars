import "normalize.css/normalize.css";

import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
const monsterrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${monsterrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = { children: React.ReactNode };
export const RouterCheck = ({ children }: Props) => {
  const { isReady } = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, [setIsBrowser]);

  if (!isReady || !isBrowser) {
    return <></>;
  }

  return <>{children}</>;
};

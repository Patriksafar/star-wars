import type { ReactNode } from "react";

import * as styles from "./layout.styles";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: Props) => {
  return (
    <main css={styles.main} className={className}>
      {children}
    </main>
  );
};

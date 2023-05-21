import type { ReactNode } from "react";

import * as styles from "./main-layout.styles";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main css={styles.main}>
      <section css={styles.section}>{children}</section>
    </main>
  );
};

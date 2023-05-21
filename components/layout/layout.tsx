import type { ReactNode } from "react";

import * as styles from "./layout.styles";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <main css={styles.main}>{children}</main>;
};

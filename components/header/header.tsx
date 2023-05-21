import NextImage from "next/image";

import * as styles from "./header.styles";

type Props = {
  image: ImageMeta;
};

export const Header = ({ image }: Props) => {
  return (
    <header css={styles.header}>
      <NextImage css={styles.image} src={image} alt="logo" fill />
    </header>
  );
};

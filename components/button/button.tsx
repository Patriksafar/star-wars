import type {
  ButtonHTMLAttributes,
  ComponentProps,
  MouseEvent,
  ReactNode,
} from "react";
import NextLink from "next/link";

import * as styles from "./button.styles";

type Button = {
  children: ReactNode;
  href?: string;
  linkProps?: Omit<ComponentProps<typeof NextLink>, "href" | "children">;
  onClick?: (
    e: MouseEvent<HTMLAnchorElement & HTMLButtonElement>
  ) => unknown | Promise<unknown>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export const Button = ({
  children,
  type = "button",
  disabled = false,
  href,
  className,
  onClick,
  linkProps,
  ...buttonProps
}: Button) => {
  if (href !== undefined) {
    return (
      <NextLink
        role="button"
        onClick={onClick}
        css={styles.root}
        {...linkProps}
        {...(buttonProps as ComponentProps<typeof NextLink>)}
      >
        {children}
      </NextLink>
    );
  }

  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      css={styles.root}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

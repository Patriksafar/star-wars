import { css } from "@emotion/react";

export const main = css`
  background-color: #f7f7f8;
  border-radius: 24px;
  min-height: 100dvh;
  display: grid;
  grid-template-columns:
    1fr
    min(60ch, 100%)
    1fr;
  padding-left: 16px;
  padding-right: 16px;
  & > * {
    grid-column: 2;
  }
`;

export const section = css`
  max-width: 920px;
`;

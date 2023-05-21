import { css } from "@emotion/react";

export const main = css`
  background-color: #f7f7f8;
  border-radius: 24px 24px 0 0;
  display: grid;
  grid-template-columns:
    1fr
    min(60ch, 100%)
    1fr;
  padding-left: 16px;
  padding-right: 16px;
  isolation: isolate;
  flex-grow: 1;

  & > * {
    grid-column: 2;
  }
`;

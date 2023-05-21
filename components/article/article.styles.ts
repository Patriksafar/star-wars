import { css } from "@emotion/react";

export const card = css`
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(36, 34, 42, 0.04),
    0px 4px 4px rgba(36, 34, 42, 0.04);
  border-radius: 4px;
  position: relative;
`;

export const rating = css`
  height: 9px;
  font-size: 0.5rem;
`;

export const title = css`
  color: #1a0826;
  font-size: clamp(calc(1rem / 16 * 15), 0.25rem + 1vw, calc(1rem / 16 * 18));
  margin: 6px 0 0 0;
  font-weight: 600;
`;

export const description = css`
  color: #655368;
  margin: 8px 0 0 0;
  font-weight: 500;
  font-size: clamp(calc(1rem / 16 * 14), 0.25rem + 1vw, calc(1rem / 16 * 16));
`;

export const actors = css`
  color: #7e6f80;
  margin: 6px 0 0 0;
  font-size: clamp(calc(1rem / 16 * 11), 0.25rem + 1vw, calc(1rem / 16 * 14));
`;

export const edit = css`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  fill: #7e6f80;
  width: 16px;
  height: 16px;
  transition: all 250ms ease-in-out;
  will-change: transform, fill;

  &:hover {
    fill: #655368;
    transform: scale(1.1);
  }
`;

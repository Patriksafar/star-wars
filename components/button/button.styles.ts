import { css } from "@emotion/react";

export const root = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  font-size: 0.875rem;
  background: linear-gradient(
      45deg,
      rgb(144, 224, 64) 0%,
      rgb(46, 205, 92) 100%
    )
    rgb(46, 205, 92);
  text-decoration: none;
  padding: 8px 24px;
  min-height: 48px;
  transition: background-color 250ms ease-in-out 0s,
    background-image 250ms ease-in-out 0s;
  color: rgb(255, 255, 255);
  width: 100%;
  font-weight: 600;

  &:hover {
    background: rgba(156, 145, 158, 0.24);
    background-color: rgb(40, 180, 81);
  }

  &[disabled] {
    opacity: 0.65;
    cursor: default;
    pointer-events: none;
    box-shadow: none;
    color: rgb(126, 111, 128);
    background: rgba(156, 145, 158, 0.24);

    &:hover {
      background: rgba(156, 145, 158, 0.24);
    }
  }
`;

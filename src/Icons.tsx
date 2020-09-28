import React from "react";
import user from "./user.svg";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const UserIcon = () => (
  <img
    src={user}
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
    alt="User"
    width="12px"
  />
);

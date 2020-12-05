import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { colorSet } from "./theme";

const GoPageStyle = styled(Link, NavLink)`
  ${props => {
    const { color, underline } = props;

    return css`
      display: inline-block;
      padding-left: 4px;
      font-size: 15px;
      color: ${color || colorSet.black};
      text-decoration: ${underline ? "underline" : "none"};
      font-weight: 400;

      &:hover,
      &.on {
        font-weight: bold;
      }
    `;
  }}
`;

function GoPage({ title, color, underline, to, ...rest }) {
  return (
    <GoPageStyle to={to} color={color} underline={underline} {...rest}>
      {title}
    </GoPageStyle>
  );
}

export default GoPage;

import React from "react";
import styled, { css } from "styled-components";
import { colorSet } from "./theme";

const GoPageStyle = styled.a`
  ${props => {
    const { color } = props;

    return css`
      display: inline-block;
      margin-top: 80px;
      padding-left: 4px;
      font-size: 15px;
      color: ${color || colorSet.black};
      text-decoration: underline;
      font-weight: 400;
    `;
  }}
`;

function GoPage({ title, color }) {
  return (
    <GoPageStyle href="#" color={color}>
      {title}
    </GoPageStyle>
  );
}

export default GoPage;

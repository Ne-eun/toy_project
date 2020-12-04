import React from "react";
import styled, { css } from "styled-components";
import { colorSet } from "./theme";

const ArrowStyle = styled.span`
  ${props => {
    const { color, left, top, size, on } = props;

    return css`
      position: absolute;
      right: ${left || "2px"};
      top: ${top || "20px"};
      &:after {
        display: block;
        content: "";
        width: ${size || "7px"};
        height: ${size || "7px"};
        border: 2px solid ${color || colorSet.primary};
        border-left: none;
        border-top: none;
        transform: ${on ? "rotate(-135deg)" : "rotate(45deg)"};
        transition: transform 0.2s;
      }
    `;
  }}
`;

function Arrow({ color, left, top, size, on, ...rest }) {
  return (
    <ArrowStyle
      color={color}
      left={left}
      top={top}
      size={size}
      {...rest}
    ></ArrowStyle>
  );
}

export default Arrow;

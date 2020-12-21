import React from 'react';
import styled, { css } from 'styled-components';
import { colorSet } from './theme';

interface ArrowProps {
  on: number;
  color?: string;
  left?: string;
  top?: string;
  size?: string;
}

const ArrowStyle = styled.span`
  ${(props: ArrowProps) => {
    const { color, left, top, size, on } = props;

    return css`
      position: absolute;
      right: ${left || '2px'};
      top: ${top || '20px'};
      &:after {
        display: block;
        content: '';
        width: ${size || '7px'};
        height: ${size || '7px'};
        border: 2px solid ${color || colorSet.primary};
        border-left: none;
        border-top: none;
        transform: ${on === 1 ? 'rotate(-135deg)' : 'rotate(45deg)'};
        transition: transform 0.2s;
      }
    `;
  }}
`;

function Arrow({ color, left, top, size, on, ...rest }: ArrowProps) {
  return <ArrowStyle color={color} left={left} top={top} size={size} on={on} {...rest} />;
}

export default Arrow;

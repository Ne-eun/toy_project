import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colorSet } from './theme';

interface gopageType {
  title: string;
  to: string;
  color?: string;
  className?: 'underline' | 'on' | string;
}
const GoPageStyle = styled(Link)`
  ${(props) => {
    const { color } = props;

    return css`
      display: inline-block;
      padding-left: 4px;
      font-size: 15px;
      color: ${color || colorSet.black};
      font-weight: 400;
      text-decoration: none;

      &:hover,
      &.on {
        font-weight: bold;
      }

      &.underline {
        text-decoration: underline;
      }
    `;
  }}
`;

function GoPage({ title, color, className, to, ...rest }: gopageType) {
  return (
    <GoPageStyle to={to} color={color} className={className} {...rest}>
      {title}
    </GoPageStyle>
  );
}

export default GoPage;

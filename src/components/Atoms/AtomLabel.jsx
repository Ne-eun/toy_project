import React from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

const LabelStyle = styled.label`
  display: inline-block;
  font-size: 17px;
  color: ${colorSet.black};
  font-weight: bold;
  margin-bottom: 8px;
  &.mid {
    font-size: 19px;
  }
`;

function Label({ name, children, className }) {
  return (
    <LabelStyle className={className} htmlFor={name}>
      {children}
    </LabelStyle>
  );
}

export default Label;

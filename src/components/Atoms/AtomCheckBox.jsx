import React from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

import checkBlue from '../../images/checkBlue.png';
import checkGray from '../../images/checkGray.png';

const CheckBoxStyle = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;

  position: relative;
  width: 26px;
  height: 26px;
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${checkGray});
    background-repeat: no-repeat;
    background-size: 24px 24px;
  }
  &:checked:before {
    background-image: url(${checkBlue});
  }
`;

function CheckBox({ value, className }) {
  return <CheckBoxStyle type="checkbox" className={className} value={value} />;
}

export default CheckBox;

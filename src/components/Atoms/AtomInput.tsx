import React from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

interface inputProps {
  placeholder: string;
  value?: string;
  disabled?: boolean;
  name?: string;
}

const InputStyle = styled.input`
  width: 100%;
  padding: 18px;
  font-size: 19px;
  color: ${colorSet.black};
  border-radius: 12px;
  background-color: #f4f4f4;
  box-shadow: 0 3px 6px #00000029;
  border: none;
  box-sizing: border-box;

  &::placeholder {
    color: #c5c4c4;
    font-weight: 300;
  }

  &:disabled {
    background-color: transparent;
    box-shadow: none;
    font-size: 14px;
    color: ${colorSet.black};
  }
`;

function InputSet({ placeholder, value, disabled, name }: inputProps) {
  return <InputStyle name={name} placeholder={placeholder} value={value} disabled={disabled} />;
}

export default InputSet;
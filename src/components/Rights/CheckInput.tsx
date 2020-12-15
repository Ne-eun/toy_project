import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import CheckBox from '../Atoms/AtomCheckBox';
import Input from '../Atoms/AtomInput';

interface checkInputProps {
  value: string;
  placeholder: string;
}
const CheckInputStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

function CheckInput({ value, placeholder }: checkInputProps) {
  const [checkValue, setCheckValue] = useState('');

  // const changeValue = (e) => {
  //   setCheckValue(e.tartget.value);
  // };
  return (
    <CheckInputStyle>
      <CheckBox className="mr_20" value={checkValue} />
      <Input placeholder={placeholder} value={value} />
    </CheckInputStyle>
  );
}

export default CheckInput;

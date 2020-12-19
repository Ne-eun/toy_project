import React, { useRef } from 'react';
import styled from 'styled-components';
import Label from './AtomLabel';
import Input from './AtomInput';
import { colorSet } from './theme';

interface inputSetProps {
  label: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  name: string;
  LabelClass?: string;
  InputClass?: string;
  type?: string;
  useref?: React.MutableRefObject<HTMLInputElement | undefined>;
}

const InputSetStyle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  > label {
    font-size: 16px;
    font-weight: 400;
    color: ${colorSet.black};
  }
  > input {
    padding: 16px;
    font-size: 14px;
  }
`;

function InputSet({
  placeholder,
  value,
  disabled,
  name,
  LabelClass,
  InputClass,
  type,
  label,
  useref,
}: inputSetProps) {
  return (
    <InputSetStyle>
      <Label className={LabelClass} name={name}>
        {label}
      </Label>
      <Input
        useref={useref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className={InputClass}
      />
    </InputSetStyle>
  );
}

export default InputSet;

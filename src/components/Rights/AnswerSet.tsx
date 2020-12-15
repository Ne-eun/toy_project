import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import Button from '../Atoms/AtomButton';
import CheckInput from './CheckInput';

interface answerProps {
  num: string;
  placeholder: string;
}
const AnswerSetStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & + & {
    margin-top: 12px;
  }
`;
const RoundNumstyle = styled.div`
  min-width: 24px;
  width: 24px;
  height: 24px;
  border: 2px solid ${colorSet.black};
  border-radius: 12px;
  box-sizing: border-box;
  margin-bottom: 1px;
  margin-right: 16px;
  text-align: center;
  line-height: 1.3;
`;
function AnswerSet({ num, placeholder }: answerProps) {
  return (
    <AnswerSetStyle>
      <RoundNumstyle className={num}>{num}</RoundNumstyle>
      <CheckInput value="" placeholder={placeholder}></CheckInput>
      <Button className="close" style="marginLeft: 12px"></Button>
    </AnswerSetStyle>
  );
}

export default AnswerSet;

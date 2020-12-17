import React, { useState } from 'react';
import styled from 'styled-components';
import InputSet from '../../components/Atoms/AtomInputSet';

const StudentFormStyle = styled.div`
  display: flex;
  div + div {
    margin-left: 14px;
  }
  > div {
    &:nth-of-type(1) {
      flex-shrink: 1;
    }
    &:nth-of-type(2) {
      flex-shrink: 1.2;
    }
    &:nth-of-type(3) {
      flex-shrink: 1;
    }
  }
`;
function StudentForm() {
  return (
    <StudentFormStyle>
      <InputSet label="학년" name="grade" placeholder="학년을 입력하세요" />
      <InputSet label="반" name="classroom" placeholder="반을 입력하세요" />
      <InputSet label="번호" name="tag" placeholder="번호를 입력하세요" />
    </StudentFormStyle>
  );
}

export default StudentForm;

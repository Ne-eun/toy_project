import React from 'react';
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
      margin-bottom: 0;
    }
    &:nth-of-type(2) {
      flex-shrink: 1.2;
      margin-bottom: 0;
    }
    &:nth-of-type(3) {
      flex-shrink: 1;
      margin-bottom: 0;
    }
  }
`;
interface studentFormProps {
  graderef?: React.MutableRefObject<HTMLInputElement | undefined>;
  classRoomref?: React.MutableRefObject<HTMLInputElement | undefined>;
  tagref?: React.MutableRefObject<HTMLInputElement | undefined>;
}

function StudentForm({ graderef, classRoomref, tagref }: studentFormProps) {
  return (
    <StudentFormStyle>
      <InputSet
        type="number"
        useref={graderef}
        label="학년"
        name="grade"
        placeholder="학년을 입력하세요"
         />
      <InputSet
        type="number"
        useref={classRoomref}
        label="반"
        name="classroom"
        placeholder="반을 입력하세요"
      />
      <InputSet
        type="number"
        useref={tagref}
        label="번호"
        name="tag"
        placeholder="번호를 입력하세요"
      />
    </StudentFormStyle>
  );
}

export default StudentForm;

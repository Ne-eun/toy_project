import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';

import noActive from '../../images/testSentenceSelectInactive.png';
import studentActive from '../../images/signup_check_studentActive.png';
import teacherActive from '../../images/signup_check_teacherActive.png';
import LayoutFlex from '../Atoms/AtomLayoutFlex';
import Title from '../Atoms/AtomTitle';

const TypeSelectStyle = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 20px;
  padding: 16px;
  padding-right: 60px;
  background: white;
  color: ${colorSet.subtitle};
  font-size: 19px;
  border-radius: 8px;
  cursor: pointer;
  & + & {
    margin-left: 14px;
  }
  &:after {
    position: absolute;
    top: 16px;
    right: 12px;
    display: block;
    width: 26px;
    height: 27px;
    background-image: url(${noActive});
    background-size: 26px;
    content: '';
  }
  &.student {
    background-color: #53c400;
    color: white;
    &:after {
      background-image: url(${studentActive});
    }
  }
  &.teacher {
    background-color: ${colorSet.secondary};
    color: white;
    &:after {
      background-image: url(${teacherActive});
    }
  }
`;

interface TermsProps {
  type: number;
  onClick: (type: number) => void;
}

function AuthoritySelect({ type, onClick }: TermsProps) {
  function selectType(type: number) {
    onClick(type);
  }

  return (
    <React.Fragment>
      <Title>회원 구분*</Title>
      <LayoutFlex>
        <TypeSelectStyle
          className={type === 1 ? 'teacher' : undefined}
          onClick={() => {
            selectType(1);
          }}
        >
          선생님입니다
        </TypeSelectStyle>

        <TypeSelectStyle
          className={type === 2 ? 'student' : undefined}
          onClick={() => {
            selectType(2);
          }}
        >
          학생입니다
        </TypeSelectStyle>
      </LayoutFlex>
    </React.Fragment>
  );
}

export default AuthoritySelect;

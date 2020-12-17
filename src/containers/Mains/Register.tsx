import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/AtomButton';
import Title from '../../components/Atoms/AtomTitle';
import GoPage from '../../components/Atoms/AtomGoPage';
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex';
import InputSet from '../../components/Atoms/AtomInputSet';
import { LoginBoxStyle } from './Login';
import Terms from '../../components/Mains/Terms';
import AuthoritySelect from '../../components/Mains/AuthoritySelect';
import StudentForm from '../../components/Mains/StudentForm';

interface memberType {
  name: string;
  authority: number;
  organization: string;
  grade: number;
  classroom: number;
  tag: number;
  email: string;
  password: string;
}

function Register() {
  const [members, setMembers] = useState({
    name: '',
    authority: 0,
    organization: '',
    grade: 0,
    classroom: 0,
    tag: 0,
    email: '',
    password: '',
  });

  const changeAuthType = (type: number) => {
    setMembers((members) => ({
      ...members,
      authority: type,
    }));
    console.log(members);
  };
  return (
    <LoginBoxStyle>
      <Title className="bold">가입하기 - 프로필정보</Title>

      <div className="form_box">
        <InputSet label="이름*" name="name" placeholder="이름을 입력하세요" />
        <AuthoritySelect type={members.authority} onClick={changeAuthType}></AuthoritySelect>
        <InputSet
          label="학교 또는 학원 이름 입력하기*"
          name="organization"
          placeholder="학교 또는 학원을 입력하세요"
        />
        {members.authority === 2 ? <StudentForm></StudentForm> : null}
      </div>
      <Button>다음</Button>

      <LayoutFlex className="felx_end mt_20">
        <GoPage className="underline ml_16" to="/login" title="로그인하기" />
        <Title className="sub">이미 가입했다면?</Title>
      </LayoutFlex>

      <Terms className="mt_12"></Terms>
    </LoginBoxStyle>
  );
}

export default Register;

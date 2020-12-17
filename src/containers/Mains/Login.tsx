import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/AtomButton';
import Title from '../../components/Atoms/AtomTitle';
import GoPage from '../../components/Atoms/AtomGoPage';
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex';
import InputSet from '../../components/Atoms/AtomInputSet';

export const LoginBoxStyle = styled.div`
  width: 100px;
  min-width: 460px;
  margin: 0 auto;
  padding: 28px 40px;
  background-color: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  border-radius: 8px;
  .form_box {
    text-align: left;
    margin: 20px 0;
  }
`;

function Login() {
  return (
    <LoginBoxStyle>
      <Title className="bold">시작하기</Title>
      <Title className="sub mt_8">환영합니다! 계정이 없다면 회원가입 후 이용해주세요.</Title>

      <div className="form_box">
        <InputSet label="이메일 주소" name="email" type="email" placeholder="이메일을 입력하세요" />
        <InputSet
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <Button>로그인</Button>
      <LayoutFlex className="justify_btw mt_20">
        <GoPage to="#" title="비밀번호 찾기" />
        <GoPage to="register" title="가입하기" className="underline" />
      </LayoutFlex>
    </LoginBoxStyle>
  );
}

export default Login;

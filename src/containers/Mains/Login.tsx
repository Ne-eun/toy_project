import { match } from 'assert';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/AtomButton';

const LoginBoxStyle = styled.div`
  width: 100px;
  min-width: 460px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
`;

function Login() {
  console.log('login');
  return (
    <LoginBoxStyle>
      로그인
      <Button>로그인</Button>
    </LoginBoxStyle>
  );
}

export default Login;

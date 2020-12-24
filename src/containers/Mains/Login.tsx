import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/AtomButton';
import Title from '../../components/Atoms/AtomTitle';
import GoPage from '../../components/Atoms/AtomGoPage';
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex';
import InputSet from '../../components/Atoms/AtomInputSet';
import api from '../../router/api';
import { useHistory } from 'react-router-dom';

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
  let emailDom = useRef<HTMLInputElement>();
  let passwordDom = useRef<HTMLInputElement>();
  let history = useHistory();

  const validationHandle = () => {
    if (emailDom.current.value === '') {
      alert('이메일을 입력하세요');
    } else if (passwordDom.current.value === '') {
      alert('비밀번호를 입력하세요');
    } else {
      loginRequest();
    }
  };
  const loginRequest = () => {
    api
      .post('/user/login', {
        email: emailDom.current.value,
        password: passwordDom.current.value,
      })
      .then((res: object) => {
        if (res.data.status === 1010) {
          alert('가입된 이메일이 없습니다');
        } else if (res.data.status === 1011) {
          alert('비밀번호가 일치하지 않습니다');
        } else if (res.data.status === 200) {
          localStorage.setItem('AUTH_TOKEN', res.data.data.token);
          history.push('/admin/content/video');
        }
      })
      .catch((error: any) => console.log(error));
  };
  return (
    <LoginBoxStyle>
      <Title className="bold">시작하기</Title>
      <Title className="sub mt_8">환영합니다! 계정이 없다면 회원가입 후 이용해주세요.</Title>

      <div className="form_box">
        <InputSet
          useref={emailDom}
          label="이메일 주소"
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <InputSet
          useref={passwordDom}
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <Button onClick={validationHandle}>로그인</Button>
      <LayoutFlex className="justify_btw mt_20">
        <GoPage to="#" title="비밀번호 찾기" />
        <GoPage to="register" title="가입하기" className="underline" />
      </LayoutFlex>
    </LoginBoxStyle>
  );
}

export default Login;

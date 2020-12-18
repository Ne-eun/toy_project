import React, { useRef } from 'react';
import InputSet from '../../components/Atoms/AtomInputSet';

interface RegisterStep2Props {
  emailref: React.MutableRefObject<HTMLInputElement | undefined>;
  passwordref: React.MutableRefObject<HTMLInputElement | undefined>;
  checkPasswordref: React.MutableRefObject<HTMLInputElement | undefined>;
}

function RegisterStep2({ emailref, passwordref, checkPasswordref }: RegisterStep2Props) {
  return (
    <div className="form_box">
      <InputSet
        useref={emailref}
        label="이메일 주소"
        name="email"
        placeholder="이메일을 입력하세요"
      />
      <InputSet
        useref={passwordref}
        label="비밀번호*"
        name="password"
        placeholder="비밀번호를 입력하세요"
      />
      <InputSet
        useref={checkPasswordref}
        label="비밀번호 확인*"
        name="checkPassword"
        placeholder="비밀번호를 한번 더 입력하세요"
      />
    </div>
  );
}

export default RegisterStep2;

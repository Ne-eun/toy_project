import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../../components/Atoms/AtomButton';
import Title from '../../components/Atoms/AtomTitle';
import GoPage from '../../components/Atoms/AtomGoPage';
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex';
import InputSet from '../../components/Atoms/AtomInputSet';
import { LoginBoxStyle } from './Login';
import Terms from '../../components/Mains/Terms';
import AuthoritySelect from '../../components/Mains/AuthoritySelect';
import StudentForm from '../../components/Mains/StudentForm';
import RegisterStep2 from '../../components/Mains/RegisterStep2';
import api from '../../router/api'
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
  const [registerStep, setRegisterStep] = useState(1);
  const [agreestate, setagreestate ] = useState(false);
  const [members, setMembers] = useState({
    name: '',
    authority: 1,
    organization: '',
    grade: '',
    classroom: '',
    tag: '',
    email: '',
    password: '',
  });

  let nameDom = useRef<HTMLInputElement>();
  let organizationDom = useRef<HTMLInputElement>();
  let gradeDom = useRef<HTMLInputElement>();
  let classRoomDom = useRef<HTMLInputElement>();
  let tagDom = useRef<HTMLInputElement>();
  let emailDom = useRef<HTMLInputElement>();
  let passwordDom = useRef<HTMLInputElement>();
  let checkPasswordDom = useRef<HTMLInputElement>();

  const changeAuthType = (type: number) => {
    setMembers((members) => ({
      ...members,
      authority: type,
    }));
  };

  // validation
  const sept1Setdata = () => {
    let name = nameDom.current.value;
    let organization = organizationDom.current.value;

    if(name === '') {
      alert('이름을 입력하세요')
    } else if(organization === '') {
      alert('학교 또는 학원 이름을 입력하세요')
    } else if(agreestate === false) {
      alert('약관에 동의하세요')
    } else {
      if(members.authority === 1) {
        setMembers((members) => ({
          ...members,
          name: name,
          organization: organization
        }))
        setRegisterStep(2);
      } else if (members.authority === 2) {
        let grade = gradeDom.current.value
        let classroom = classRoomDom.current.value
        let tag = tagDom.current.value;

        if(grade === '') {
          alert('학년을 입력하세요');
        }else if(classroom === '') {
          alert('반을 입력하세요')
        }else if (tag === '') {
          alert('번호를 입력하세요')
        }else {
          setMembers((members) => ({
            ...members,
            name: name,
            organization: organization,
            grade: grade,
            classroom: classroom,
            tag: tag
          }))
          setRegisterStep(2);
        }
      }
    }
  };

  const sep2Setdata = () => {
    let email = emailDom.current.value;
    let password = passwordDom.current.value;
    let checkPassword = checkPasswordDom.current.value;

    if(email === '') {
      alert('이메일을 입력하세요');
    }else if(password === '') {
      alert('비밀번호를 입력하세요')
    }else if(password !== checkPassword) {
      alert('비밀번호 확인이 일치하지 않습니다')
    } else {
      setMembers((members)=> ({
        ...members,
        email: email,
        password: password
      }))
    }
  }

  const submitHandle = () => {
    sep2Setdata();
    console.log(members)

    if(members.authority === 1) {
      api.post('user/register', {
        name: members.name,
        authority: members.authority,
        organization: members.authority,
        grade: null,
        classroom: null,
        tag: null,
        email: members.email,
        password: members.password,
      })
      .then((res: any) => {
        if(res.status === 200) {
          alert('회원가입이 완료되었습니다')
        } else if(res.status === 1000) {
          alert('이미 등록된 이메일 입니다')
        } else {
          alert('error')
        }
      })
      .catch((error: any) => console.log(error))
    } else if (members.authority === 2) {
      api.post('user/register', {
        name: members.name,
        authority: members.authority,
        organization: members.authority,
        grade: members.grade,
        classroom: members.classroom,
        tag: members.tag,
        email: members.email,
        password: members.password,
      })
      .then((res: any) => {
        if(res.status === 200) {
          alert('회원가입이 완료되었습니다')
        } else if(res.status === 1000) {
          alert('이미 등록된 이메일 입니다')
        } else {
          alert('error')
        }
      })
      .catch((error: any) => console.log(error))
    }
  }
  return (
    <LoginBoxStyle>
      <Title className="bold">가입하기 - 프로필정보</Title>
       {/*---[s] 회원가입 1단계 */}
      {registerStep === 1 ? (
        <React.Fragment>
        <div className="form_box">
        <InputSet label="이름*" name="name" placeholder="이름을 입력하세요" useref={nameDom} />
        <AuthoritySelect type={members.authority} onClick={changeAuthType}></AuthoritySelect>
        <InputSet
          useref={organizationDom}
          label="학교 또는 학원 이름 입력하기*"
          name="organization"
          placeholder="학교 또는 학원을 입력하세요"
        />
        {/*---[s] 회원타입이 학생일 때 추가 폼 */}
        {members.authority === 2 ? (
          <StudentForm
            graderef={gradeDom}
            classRoomref={classRoomDom}
            tagref={tagDom}
          ></StudentForm>
        ) : null}
        </div>
        <Button onClick={() => {sept1Setdata()}}>다음</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/*---[s] 회원가입 2단계 */}
          <RegisterStep2 emailref={emailDom} passwordref={passwordDom} checkPasswordref={checkPasswordDom} />
          <Button className="gray" onClick={() => {setRegisterStep(1)}}>이전</Button>
          <Button className="ml_20" onClick={() => {submitHandle()}}>가입하기</Button>
        </React.Fragment>
      )}
      
      <LayoutFlex className="felx_end mt_20">
        <GoPage className="underline ml_16" to="/login" title="로그인하기" />
        <Title className="sub">이미 가입했다면?</Title>
      </LayoutFlex>
      {/*---[s] 회원 약관 동의*/}
      {registerStep === 1 ? <Terms onClick={() => {setagreestate(!agreestate)}} agree={agreestate} className="mt_12"></Terms> : null}
    </LoginBoxStyle>
  );
}

export default Register;

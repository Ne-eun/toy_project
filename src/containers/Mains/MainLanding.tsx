import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import landingBackground from '../../images/landingBackground.png';
import logo from '../../images/logo.png';
import Button from '../../components/Atoms/AtomButton';

const MainStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
`;

const MainLogoStyle = styled.div`
  width: 100%;
  > img {
    width: 20%;
  }
  > p {
    font-size: 24px;
    color: white;
  }
`;
const ButtonPosition = {
  position: 'absolute',
  top: '80px',
  right: '60px',
};
function MainLanding() {
  let history = useHistory();

  function onClickHandler() {
    history.push('/login');
  }

  return (
    <MainStyle>
      <MainLogoStyle>
        <img src={logo} alt="" />
        <p>내가 만드는 한 시간 수업</p>
      </MainLogoStyle>
      <Button style={ButtonPosition} onClick={onClickHandler}>
        시작하기
      </Button>
    </MainStyle>
  );
}

export default MainLanding;

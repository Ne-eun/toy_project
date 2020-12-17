import React from 'react';
import styled from 'styled-components';
import landingBackground from '../../images/landingBackground.png';

const MainStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${landingBackground});
  background-size: 100% 100%;
  box-sizing: border-box;
  .back_black {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

interface MainBackProp {
  children: React.ReactNode;
}

function MainBackgrond({ children }: MainBackProp) {
  return (
    <MainStyle>
      <div className="back_black">{children}</div>
    </MainStyle>
  );
}

export default MainBackgrond;

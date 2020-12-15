import React from 'react';
import styled from 'styled-components';
import { TMenuType } from '../pages/Administrator';
import LeftTop from '../components/Lefts/Left_Top';
import LeftNavMenu from '../components/Lefts/Left_Nav_Menu';
import GoPage from '../components/Atoms/AtomGoPage';

const LeftWrapStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: 240px;
  padding-left: 25px;
  padding-right: 40px;
  box-shadow: 0 3px 6px #00000029;
  box-sizing: border-box;
  background-color: white;
  z-index: 3;
`;

function LeftWrap(menus: TMenuType[]) {
  return (
    <LeftWrapStyle>
      <LeftTop />
      <LeftNavMenu menus={menus} />
      <GoPage to="/" className="underline" title="1hour로 돌아가기" />
    </LeftWrapStyle>
  );
}

export default LeftWrap;

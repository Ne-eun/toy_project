import React from 'react';
import styled from 'styled-components';
import { TMenuType } from '../pages/Administrator';
import RightHeaderTItle from '../components/Rights/RightHeaderTitle';
import RightHeader from '../components/Rights/Right_Header';
import RightRouter from '../router/Right_Router';

const RightWrapStyle = styled.div`
  padding: 100px 74px 30px;
  margin-left: 240px;
  width: calc(100% - 240px);
  min-width: 830px;
`;

function RightWrap({ menus }: TMenuType) {
  return (
    <RightWrapStyle>
      <RightRouter />
    </RightWrapStyle>
  );
}

export default RightWrap;

import React from 'react';
import styled from 'styled-components';
import RightRouter from '../router/Right_Router';

const RightWrapStyle = styled.div`
  padding: 100px 74px 30px;
  margin-left: 240px;
  width: calc(100% - 240px);
  min-width: 830px;
`;

function RightWrap() {
  return (
    <RightWrapStyle>
      <RightRouter />
    </RightWrapStyle>
  );
}

export default RightWrap;

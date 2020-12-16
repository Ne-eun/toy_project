import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import RightRouter from '../../router/RightRouter';

const RightWrapStyle = styled.div`
  padding: 100px 74px 30px;
  margin-left: 240px;
  width: calc(100% - 240px);
  min-width: 830px;
`;

function RightWrap({ match }: RouteComponentProps) {
  return (
    <RightWrapStyle>
      <RightRouter match={match} />
    </RightWrapStyle>
  );
}

export default RightWrap;

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import LeftWrap from '../containers/Admins/LeftWrap';
import RightWrap from '../containers/Admins/RightWrap';

const AdminStyle = styled.div`
  display: flex;
  position: relative;
`;

function Administrator({ match, history, location }: RouteComponentProps) {
  return (
    <AdminStyle>
      <LeftWrap />
      <RightWrap match={match} history={history} location={location} />
    </AdminStyle>
  );
}

export default Administrator;

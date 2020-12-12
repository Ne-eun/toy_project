import React from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import logo from '../../images/headerLogo.png';

const LeftTopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 0;

  > img {
    height: 28px;
    padding-top: 2px;
  }

  > p {
    position: relative;
    min-width: 70px;
    font-size: 22px;
    color: ${colorSet.subtitle};
    text-align: right;
    padding-left: 8px;
    &:before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      display: block;
      width: 2px;
      height: 20px;
      background-color: ${colorSet.subtitle};
    }
  }
`;

function LeftTop() {
  return (
    <LeftTopStyle>
      <img src={logo} alt="" />
      <p>관리자</p>
    </LeftTopStyle>
  );
}

export default LeftTop;

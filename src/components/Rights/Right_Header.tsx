import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import RightHeaderTItle from './RightHeaderTitle';
import SubMenu from './SubMenu';

const RightHeaderStyle = styled.div`
  border-bottom: 2px solid ${colorSet.backgray};
  margin-bottom: 40px;
`;

interface rightHeaderProps {
  headerMenu: {
    title: string;
    submenu: {
      title: string;
      link: string;
    }[];
  };
}

function RightHeader({ headerMenu }: rightHeaderProps) {
  return (
    <RightHeaderStyle>
      <RightHeaderTItle title={headerMenu.title} />
      <SubMenu menus={headerMenu.submenu} />
    </RightHeaderStyle>
  );
}

export default RightHeader;

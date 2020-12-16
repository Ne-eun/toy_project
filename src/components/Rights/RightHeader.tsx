import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Atoms/AtomTitle';
import { colorSet } from '../Atoms/theme';
import SubMenu from './SubMenu';

const RightHeaderStyle = styled.div`
  border-bottom: 2px solid ${colorSet.backgray};
  margin-bottom: 40px;
`;

interface rightHeadertype {
  title: string;
  subMenu: {
    title: string;
    link: string;
  }[];
}

interface headerMenuProps {
  headerMenu: rightHeadertype;
}
function RightHeader({ headerMenu }: headerMenuProps) {
  return (
    <RightHeaderStyle>
      <Title className="big">{headerMenu.title}</Title>
      <SubMenu menus={headerMenu.subMenu} />
    </RightHeaderStyle>
  );
}

export default RightHeader;

import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Atoms/AtomTitle';
import { colorSet } from '../Atoms/theme';
import SubMenu from './SubMenu';

const RightHeaderStyle = styled.div`
  border-bottom: 2px solid ${colorSet.backgray};
  margin-bottom: 40px;
`;

export interface rightHeadertype {
  title: string;
  subMenu: {
    title: string;
    link: string;
    PK?: number;
  }[];
}

interface headerMenuProps {
  headerMenu: rightHeadertype | undefined;
}
function RightHeader({ headerMenu }: headerMenuProps) {
  return (
    <React.Fragment>
      {headerMenu ? (
        <RightHeaderStyle>
          <Title className="big">{headerMenu.title}</Title>
          <SubMenu menus={headerMenu.subMenu} />
        </RightHeaderStyle>
      )  : null}
    </React.Fragment>
  );
}

export default RightHeader;

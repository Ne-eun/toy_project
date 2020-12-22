import React from 'react';
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
  type?: 'link' | 'filter';
  subMenu: {
    title: string;
    link: string;
    PK?: number;
  }[];
}

interface headerMenuProps {
  headerMenu: rightHeadertype | undefined;
  nowFilter?: number;
  onClick?: (categoryPK: number) => void;
}
function RightHeader({ headerMenu, nowFilter, onClick }: headerMenuProps) {
  return (
    <React.Fragment>
      {headerMenu ? (
        <RightHeaderStyle>
          <Title className="big">{headerMenu.title}</Title>
          <SubMenu nowFilter={nowFilter} onClick={onClick} menus={headerMenu.subMenu} />
        </RightHeaderStyle>
      ) : null}
    </React.Fragment>
  );
}

export default RightHeader;

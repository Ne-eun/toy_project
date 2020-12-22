import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

const PageNavigationStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  color: ${colorSet.black};
  span {
    display: inline-block;
    width: 24px;
    padding: 2px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
      background-color: ${colorSet.backgray};
    }
  }
  &.on {
    font-weight: bold;
  }
`;

interface pageNavigationProps {
  nowPage: number;
  pageLength: number;
}

function PageNavigation({ nowPage, pageLength }: pageNavigationProps) {
  const NavigationSize = 10; //한번에 노출시킬 네비메뉴의 숫자
  const [startPage, setStartPage] = useState(nowPage / NavigationSize + 1);
  let lastPage = startPage + NavigationSize;

  function pages() {
    for (let i = startPage; i > lastPage; i++) {
      console.log(i);
      return <span>{i}</span>;
    }
  }

  return (
    <PageNavigationStyle>
      <span
        onClick={() => {
          startPage - NavigationSize < 0 ? 1 : setStartPage(startPage + NavigationSize);
        }}>
        &lt;
      </span>
      {pages()}
      <span
        onClick={() => {
          setStartPage(startPage + NavigationSize);
        }}>
        &gt;
      </span>
    </PageNavigationStyle>
  );
}

export default PageNavigation;

import React, { useEffect, useState } from 'react';
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
    border-radius: 15px;
    cursor: pointer;
    font-weight: 400;
    &:hover {
      background-color: ${colorSet.backgray};
    }
    &.on {
      font-weight: 700;
      position: relative;
      &:after {
        content: "";
        display: block;
        width: 80%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 10%;
        background-color: ${colorSet.primary};
      }
    }
  }
`;

interface pageNavigationProps {
  nowPage: number;
  totalRows: number;
  clickPage: (pageNumber: number) => void
}

function PageNavigation({ nowPage, totalRows, clickPage }: pageNavigationProps) {
  const NavigationSize = 10; //한번에 노출시킬 네비메뉴의 숫자
  const [startPage, setStartPage] = useState(
    Math.floor(nowPage / NavigationSize) * NavigationSize + 1
  );

  let lastPageNum =
       startPage + NavigationSize > Math.ceil(totalRows  /  NavigationSize) + 1
      ? Math.ceil(totalRows  /  NavigationSize) + 1
      : startPage + NavigationSize

  //페이지 숫자 랜더링
  function pages() {
    const page = [];
    for (let i = startPage; i < lastPageNum; i++) {
      page.push(<span key={i} className={nowPage === i ? 'on' : undefined} onClick={() => clickPage(i)}>{i}</span>);
    }
    return page;
  }
  
  useEffect(() => {
    pages()
  }, [startPage])

  //이전 페이지
  function movePages(direction: number) {
      setStartPage(startPage + (NavigationSize * direction))
  }

  return (
    <PageNavigationStyle>
      {startPage - NavigationSize > 0 ? (
        <span onClick={() => movePages(-1)}>&lt;</span>
      ) : null}
      
      {pages()}
      
      {startPage + NavigationSize <= lastPageNum ? (
        <span onClick={() => movePages(+1)}>&gt;</span>
      ) : null}
    </PageNavigationStyle>
  );
}

export default PageNavigation;

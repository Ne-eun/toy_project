import React, { useState } from 'react';
import styled from 'styled-components';
import LeftTop from '../components/Lefts/Left_Top';
import LeftNavMenu from '../components/Lefts/Left_Nav_Menu';
import GoPage from '../components/Atoms/AtomGo_Page';

const LeftWrapStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: 240px;
  padding-left: 25px;
  padding-right: 40px;
  box-shadow: 0 3px 6px #00000029;
  box-sizing: border-box;
  background-color: white;
  z-index: 3;
`;

const MENU = [
  {
    title: '콘텐츠 만들기',
    isVisible: false,
    items: [
      {
        title: '영상 마법사',
        link: '/making',
      },
      {
        title: '문장 만들기',
        link: '/making/sentence',
      },
      {
        title: '싱크 맞추기',
        link: '/making/sync',
      },
      {
        title: '단어 만들기',
        link: '/making/word',
      },
      {
        title: '문제 만들기',
        link: '/making/quiz',
      },
    ],
  },
  {
    title: '콘텐츠 관리',
    isVisible: false,
    items: [
      {
        title: '콘텐츠 관리',
        link: '/admin',
      },
      {
        title: '과제마감 관리',
        link: '/admin/task',
      },
    ],
  },
  { title: '카테고리 관리', isVisible: false, link: '' },
  { title: '플레이리스트 관리', isVisible: false, link: '' },
  { title: '배너 관리', isVisible: false, link: '' },
  { title: '회원 관리', isVisible: false, link: '' },
  { title: '기관 관리', isVisible: false, link: '' },
];

function LeftWrap() {
  const [menu, setMenu] = useState(MENU);

  const selectIndex = (index) => {
    const data = menu.map((data, itemIndex) => {
      return {
        ...data,
        isVisible: index === itemIndex ? !data.isVisible : false,
      };
    });
    setMenu(data);
  };

  return (
    <LeftWrapStyle>
      <LeftTop />

      {menu.map((menus, index) => (
        <LeftNavMenu key={index} data={menus} onClick={selectIndex} itemIndex={index} />
      ))}

      <GoPage title="1hour로 돌아가기" underline="true" />
    </LeftWrapStyle>
  );
}

export default LeftWrap;

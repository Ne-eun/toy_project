import React from 'react';
import styled from 'styled-components';
import LeftTop from '../../components/Lefts/LeftTop';
import LeftNavMenu from '../../components/Lefts/LeftNavMenu';
import GoPage from '../../components/Atoms/AtomGoPage';

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
    link: '/admin/video',
    items: [
      {
        title: '영상 마법사',
        link: '/admin/video',
      },
      {
        title: '문장 만들기',
        link: '/admin/sentence',
      },
      {
        title: '싱크 맞추기',
        link: '/admin/sync',
      },
      {
        title: '단어 만들기',
        link: '/admin/word',
      },
      {
        title: '문제 만들기',
        link: '/admin/quiz',
      },
    ],
  },
  {
    title: '콘텐츠 관리',
    link: '/admin/list',
    items: [
      {
        title: '콘텐츠 관리',
        link: '/admin/list',
      },
      {
        title: '과제마감 관리',
        link: '/admin/task',
      },
    ],
  },
  { title: '카테고리 관리', link: '/admin/category' },
  { title: '플레이리스트 관리', link: '/admin/playlist' },
  { title: '배너 관리', link: '/admin/banner' },
  { title: '회원 관리', link: '/admin/users' },
  { title: '기관 관리', link: '/admin/company' },
];

export interface TMenuType {
  title: string;
  link: string;
  items?: TMenuItemType[];
}

export interface TMenuItemType {
  title: string;
  link: string;
}

function LeftWrap() {
  return (
    <LeftWrapStyle>
      <LeftTop />
      <LeftNavMenu menus={MENU} />
      <GoPage to="/" className="underline" title="1hour로 돌아가기" />
    </LeftWrapStyle>
  );
}

export default LeftWrap;

import React from 'react';
import styled from 'styled-components';
import LeftWrap from '../containers/LeftWrap';
import RightWrap from '../containers/RightWrap';

const AdminStyle = styled.div`
  display: flex;
  position: relative;
`;

const MENU = [
  {
    title: '콘텐츠 만들기',
    link: 'making',
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
    link: 'admin',
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
  { title: '카테고리 관리', link: '' },
  { title: '플레이리스트 관리', link: '' },
  { title: '배너 관리', link: '' },
  { title: '회원 관리', link: '' },
  { title: '기관 관리', link: '' },
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

function Administrator() {
  return (
    <AdminStyle>
      <LeftWrap menus={MENU} />
      <RightWrap menus={MENU} />
    </AdminStyle>
  );
}

export default Administrator;

import React from 'react';
import RightHeader from '../../components/Rights/Right_Header';
import MakingRouter from '../../router/Making_Router';

const menu = {
  title: '콘텐츠 만들기',
  subtitle: [
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
};

function MakingContents() {
  return (
    <React.Fragment>
      <RightHeader data={menu} />
      <MakingRouter />
    </React.Fragment>
  );
}

export default MakingContents;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as RouteComponentProps } from 'react-router-dom';
import api from '../../router/api';

import RightHeader from '../../components/Rights/RightHeader';
import ContentRouter from '../../router/ContentRouter';

const makingContentMenu = {
  title: '콘텐츠 만들기',
  subMenu: [
    {
      title: '영상 마법사',
      link: '/admin/content/video',
    },
    {
      title: '문장 만들기',
      link: '/admin/content/sentence',
    },
    {
      title: '싱크 맞추기',
      link: '/admin/content/sync',
    },
    {
      title: '단어 만들기',
      link: '/admin/content/word',
    },
    {
      title: '문제 만들기',
      link: '/admin/content/quiz',
    },
  ],
};

let contentPK = window.location.pathname.split('/')[4];
const editingContentMenu = {
  title: '콘텐츠 수정',
  subMenu: [
    {
      title: '영상 정보 수정',
      link: `/admin/content/video/${contentPK}`,
    },
    {
      title: '문장 수정',
      link: `/admin/content/sentence/${contentPK}`,
    },
    {
      title: '싱크 수정',
      link: `/admin/content/sync/${contentPK}`,
    },
    {
      title: '단어 수정',
      link: `/admin/content/word/${contentPK}`,
    },
    {
      title: '문제 수정',
      link: `/admin/content/quiz/${contentPK}`,
    },
  ],
};

function Content({ match }: RouteComponentProps) {
  const [categorysMenu, setCategorysMenu] = useState();

  useEffect(() => {
    api
      .get('/api/v1/category/list', {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      })
      .then((res: any) => {
        let categorys = res.data.data;
        setCategorysMenu(
          categorys.map((category: { category: number; name: string }) => {
            return {
              value: category.category,
              label: category.name,
            };
          })
        );
      });
  }, []);

  console.log(contentPK);
  return (
    <React.Fragment>
      <RightHeader headerMenu={contentPK !== undefined ? editingContentMenu : makingContentMenu} />
      <ContentRouter match={match} contentKey={contentPK ? contentPK : undefined} />
    </React.Fragment>
  );
}

export default Content;

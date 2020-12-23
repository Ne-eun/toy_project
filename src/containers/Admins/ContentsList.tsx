import React, { useEffect, useState } from 'react';
import PageNavigation from '../../components/Atoms/AtomPageNavigation';
import ContentList, { contentsType } from '../../components/Rights/ContentList';
import RightHeader, { rightHeadertype } from '../../components/Rights/RightHeader';
import api from '../../router/api';

function ContentsList() {
  const [contents, setContents] = useState<contentsType[]>();
  const [categorysMenu, setCategorysMenu] = useState<rightHeadertype>();
  const [nowCategory, setNowCategory] = useState<number>(-1);
  const [nowPage, setNowPage] = useState<number>(1);
  const [totalRows, setTotalRows] = useState<number>(0);

  // category load
  useEffect(() => {
    api
      .get('/api/v1/category/list', {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      })
      .then((res: any) => {
        let categorys = res.data.data;
        setCategorysMenu({
          title: '콘텐츠 관리',
          subMenu: [
            {
              title: '전체 영상',
              link: -1,
            },
            ...categorys.map((menu: { name: string; category: number }) => {
              return {
                title: menu.name,
                link: menu.category,
              };
            }),
          ],
        });
      });
  }, []);

  // Content list load
  useEffect(() => {
    api
      .get(`/api/v1/contents/list/${nowCategory}/${nowPage}`, {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      })
      .then((res: any) => {
        setContents(res.data.data.rows);
        setTotalRows(res.data.data.total);
        console.log(res.data.data);
      });
  }, [nowCategory, nowPage]);

  function changeCategory(categoryPK: number) {
    setNowCategory(categoryPK);
  }

  function toPage(pageNumber: number) {
    setNowPage(pageNumber);
  }

  return (
    <React.Fragment>
      <RightHeader headerMenu={categorysMenu} nowFilter={nowCategory} onClick={changeCategory} />
      <ContentList contents={contents}></ContentList>
      <PageNavigation nowPage={nowPage} totalRows={totalRows} clickPage={toPage} />
    </React.Fragment>
  );
}

export default ContentsList;

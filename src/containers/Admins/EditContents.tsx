import { RouteComponentProps } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ContentList from '../../components/Rights/ContentList';
import RightHeader, { rightHeadertype } from '../../components/Rights/RightHeader';
import api from '../../router/api';

function EditContents({ match }: RouteComponentProps) {
  let categorys: rightHeadertype;
  const [categorysData, setCategorysData] = useState();
  const [nowCategory, setNowCategory] = useState(-1);
  const [contents, setContents] = useState();

  useEffect(() => {
    api
      .get('/api/v1/category/list', {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      })
      .then((res: any) => {
        categorys = res.data.data;
        setCategorysData({
          title: '콘텐츠 관리',
          subMenu: [
            {
              title: '전체 영상',
              link: match.path + '-1',
            },
            ...categorys.map((menu: { title: string; link: string }) => {
              return {
                PK: menu.category,
                title: menu.name,
                link: match.path + menu.category.toString(),
              };
            }),
          ],
        });
      });
  }, []);

  useEffect(() => {
    api
      .get(`/api/v1/contents/list/${nowCategory}/${1}`, {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      })
      .then((res: any) => {
        setContents(res.data.data.rows);
      });
  }, []);

  return (
    <React.Fragment>
      <RightHeader headerMenu={categorysData} />
      <ContentList contents={contents}></ContentList>
    </React.Fragment>
  );
}

export default EditContents;

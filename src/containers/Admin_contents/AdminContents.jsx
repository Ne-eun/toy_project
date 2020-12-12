import React from 'react';
import RightHeader from '../../components/Rights/Right_Header';
import AdminContentsRouter from '../../router/Admin_Contents_Router';

const menu = {
  title: '콘텐츠 관리',
  subtitle: [
    {
      title: '전체 영상',
      link: '/admin',
    },
    {
      title: '영화속ost',
      link: '',
    },
  ],
};

function AdminContents() {
  return (
    <React.Fragment>
      <RightHeader data={menu} />
      <AdminContentsRouter />
    </React.Fragment>
  );
}

export default AdminContents;

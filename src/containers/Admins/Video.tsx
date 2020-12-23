import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import api from '../../router/api';

import RightHeader from '../../components/Rights/RightHeader';
import VideoYoutube from '../../components/Atoms/AtomsVideo';
import Input from '../../components/Atoms/AtomInput';
import Label from '../../components/Atoms/AtomLabel';
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex';
import FieldSet from '../../components/Atoms/AtomFieldSet';
import Title from '../../components/Atoms/AtomTitle';
import Textarea from '../../components/Atoms/AtomTextarea';
import Button from '../../components/Atoms/AtomButton';

const selectOpt = [
  { value: '1', label: '추천 학습과정' },
  { value: '2', label: '인기 영상' },
  { value: '3', label: '음악' },
  { value: '4', label: '영화' },
];

const youtubeOpt = {
  width: '100%',
  heigth: '100%',
  playerVars: {
    autoplay: 0,
  },
};

const makingContentMenu = {
  title: '콘텐츠 만들기',
  subMenu: [
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
};

const editingContentMenu = {
  ...makingContentMenu,
  title: '콘텐츠 수정',
};

function Video() {
  const [editContent, seteditContent] = useState<object>(); //Edit - 컨텐츠 데이터
  const [YoutubeVideoID, setYoutubeVideoID] = useState<string>('');
  let { contentPK } = useParams<{ contentPK: string | undefined }>(); //Edit - 컨텐츠 고유 넘버

  //test contentPK 42
  useEffect(() => {
    if (contentPK !== undefined) {
      api
        .get(`/api/v1/contents/load/init/${contentPK}`, {
          headers: {
            Authorization: localStorage.getItem('AUTH_TOKEN'),
          },
        })
        .then((res: any) => {
          console.log(res.data.data);
          seteditContent(res.data.data);
        });
    }
  }, [contentPK]);

  return (
    <React.Fragment>
      <RightHeader headerMenu={makingContentMenu} />
      <LayoutFlex>
        <div style={{ width: '100%' }}>
          <Label name="video_url">영상 주소*</Label>
          <Input placeholder="영상주소를 입력하세요" name="video_url" />
          <Input
            name="video_title"
            value="Why Alien Life Would be our Doom - The Great Filter"
            disabled
          />

          {}
          <VideoYoutube className="video169" options={youtubeOpt} videoId={YoutubeVideoID} />
        </div>
        <div style={{ minWidth: '260px', marginLeft: '22px' }}>
          <Label name="category">카테고리*</Label>
          <Select options={selectOpt} isMulti />
        </div>
      </LayoutFlex>
      <FieldSet>
        <Label name="class_title">수업 제목*</Label>
        <Input placeholder="수업 제목을 입력하세요" name="class_title" />
      </FieldSet>
      <FieldSet>
        <Label name="class_title">영어 가사/캡션</Label>
        <Title className="sub mb_8">마침표를 기준으로해서 자동으로 문장마다 끊어집니다.</Title>
        <Textarea placeholder="내용을 입력하세요"></Textarea>
      </FieldSet>
      <Button className="mt_32 pull_right">저장하고 다음으로</Button>
    </React.Fragment>
  );
}

export default Video;

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import api from '../../../router/api';

import VideoYoutube from '../../../components/Atoms/AtomsVideo';
import Input from '../../../components/Atoms/AtomInput';
import Label from '../../../components/Atoms/AtomLabel';
import LayoutFlex from '../../../components/Atoms/AtomLayoutFlex';
import FieldSet from '../../../components/Atoms/AtomFieldSet';
import Title from '../../../components/Atoms/AtomTitle';
import Textarea from '../../../components/Atoms/AtomTextarea';
import Button from '../../../components/Atoms/AtomButton';
import { GetYoutubeId } from '../../../components/general';

const youtubeOpt = {
  width: '100%',
  heigth: '100%',
  playerVars: {
    autoplay: 0,
  },
};

interface contentType {
  categoryKeys: Array<number>;
  categoryNames: Array<string>;
  contents: number;
  title: string;
  url: string;
  youtubeTitle: string;
}

interface VideoProps {
  contentKey?: string | undefined;
}

function Video({ contentKey }: VideoProps) {
  //공용 state
  const [YoutubeVideoID, setYoutubeVideoID] = useState<string>('');
  //수정 state
  const [editContent, seteditContent] = useState<contentType>(); //Edit - 컨텐츠 데이터

  //test contentPK 42
  useEffect(() => {
    if (contentKey !== undefined) {
      api
        .get(`/api/v1/contents/load/init/${contentKey}`, {
          headers: {
            Authorization: localStorage.getItem('AUTH_TOKEN'),
          },
        })
        .then((res: any) => {
          console.log('res', res.data.data);
          seteditContent(res.data.data);
        });
    }
  }, [contentKey]);

  return (
    <React.Fragment>
      <LayoutFlex>
        <div style={{ width: '100%' }}>
          <Label name="video_url">
            영상 주소*
            {editContent ? (
              <Title className="sub" style={{ display: 'inline-block' }}>
                수정할 수 없습니다
              </Title>
            ) : null}
          </Label>
          <Input
            placeholder="영상주소를 입력하세요"
            name="video_url"
            value={editContent ? editContent.url : undefined}
          />
          <Input
            name="video_title"
            value={editContent ? editContent.youtubeTitle : undefined}
            disabled
          />

          <VideoYoutube
            className="video169"
            options={youtubeOpt}
            videoId={editContent ? GetYoutubeId(editContent.url) : ''}
          />
        </div>
        <div style={{ minWidth: '260px', marginLeft: '22px' }}>
          <Label name="category">카테고리*</Label>
          <Select isMulti />
        </div>
      </LayoutFlex>
      <FieldSet>
        <Label name="class_title">수업 제목*</Label>
        <Input
          placeholder="수업 제목을 입력하세요"
          name="class_title"
          value={editContent ? editContent.title : undefined}
        />
      </FieldSet>
      {editContent ? null : (
        <FieldSet>
          <Label name="class_title">영어 가사/캡션</Label>
          <Title className="sub mb_8">마침표를 기준으로해서 자동으로 문장마다 끊어집니다.</Title>
          <Textarea placeholder="내용을 입력하세요"></Textarea>
        </FieldSet>
      )}
      <Button className="mt_32 pull_right">저장하고 다음으로</Button>
    </React.Fragment>
  );
}

export default Video;

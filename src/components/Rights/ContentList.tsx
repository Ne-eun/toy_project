import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import Title from '../Atoms/AtomTitle';
import Thum from '../Atoms/AtomThum';
import Badge from '../Atoms/AtomBadge';
import Switch from '../Atoms/AtomSwitch';
import SettingSet from './SettingSet';
import api from '../../router/api';

const ContentListStyle = styled.div`
  display: flex;
  padding: 16px 0;
  height: 116px;
  justify-content: space-between;
  align-items: center;
  & + & {
    border-top: 1px solid ${colorSet.gray};
  }
`;

const ContentInfoStyle = styled.div`
  min-width: 340px;
  box-sizing: border-box;
  width: 40%;
  margin-right: auto;
  margin-left: 50px;
  padding-right: 16px;
`;

const SwitchWrapStyle = styled.div`
  text-align: center;
`;

interface contentsType {
  pk: number;
  title: string;
  youtubeTitle: string;
  category: string;
  hidden: boolean;
  url: string;
  problems: string;
  registered: string;
}

interface contentListProps {
  contents: contentsType[] | undefined;
}

//http://img.youtube.com/vi/[video-id]/[thumbnail-number].jpg
function ContentList({ contents }: contentListProps) {
  const [contentList, setContentList] = useState(contents);

  useEffect(() => {
    if (contents && Array.isArray(contents)) {
      contents.map((content, index) => {
        let regexImageUrl = content.url.match(
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        );

        if (regexImageUrl !== null) {
          content.url = regexImageUrl[2];
        }
        return content;
      });
      setContentList(contents);
    }
  }, [contents]);

  console.log(contents);

  const changeHidden = (pk: number, isOn: boolean, index: number) => {
    api
      .post(
        '/api/v1/contents/update/shown',
        {
          contents: pk,
          isHidden: isOn,
        },
        {
          headers: {
            Authorization: localStorage.getItem('AUTH_TOKEN'),
          },
        }
      )
      .then((res: any) => {
        console.log(res);
        let excontents: contentsType[] = ContentList;
        console.log(excontents);
        excontents[index].hidden = !excontents[index].hidden;
        setContentList(...excontents);
      });
  };
  return (
    <React.Fragment>
      {contentList
        ? contentList.map((content, index) => {
            return (
              <ContentListStyle key={index}>
                <div style={{ minWidth: '200px' }}>
                  <Thum src={`http://img.youtube.com/vi/${content.url}/0.jpg`}></Thum>
                </div>
                <ContentInfoStyle>
                  <Title className="sub ellipsis">{content.category}</Title>
                  <Title className="mid bold ellipsis">{content.title}</Title>
                  <Title className="sub ellipsis">{content.youtubeTitle}</Title>
                  <div>
                    <Badge>단어</Badge>
                    <Badge>문장</Badge>
                    <Badge>더빙</Badge>
                    <Badge>문제</Badge>
                  </div>
                  <Title className="sub">{content.registered}</Title>
                </ContentInfoStyle>

                <SwitchWrapStyle>
                  <Switch
                    onClick={() => changeHidden(content.pk, !content.hidden, index)}
                    isOn={content.hidden ? false : true}
                  />
                  <Title className="sub">{content.hidden ? '영상 비공개중' : '영상 공개중'}</Title>
                </SwitchWrapStyle>

                <SettingSet>
                  <Title className="sub">영상 수정하기</Title>
                  <Title className="sub">영상 삭제하기</Title>
                </SettingSet>
              </ContentListStyle>
            );
          })
        : null}
    </React.Fragment>
  );
}

export default ContentList;

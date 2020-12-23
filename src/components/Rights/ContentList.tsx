import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import Title from '../Atoms/AtomTitle';
import Thum from '../Atoms/AtomThum';
import Badge from '../Atoms/AtomBadge';
import Switch from '../Atoms/AtomSwitch';
import SettingSet from './SettingSet';
import api from '../../router/api';
import { GetYoutubeId } from '../general';

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

export interface contentsType {
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

  let isHidden: boolean[] = new Array(2).fill(false);
  const [contentHidden, setContentHidden] = useState(isHidden);

  useEffect(() => {
    if (contents && Array.isArray(contents)) {
      contents.map((content, index) => {
        content.url = GetYoutubeId(content.url);
        isHidden[index] = content.hidden;
        setContentHidden(isHidden);
        return content;
      });
      setContentList(contents);
    }
  }, [contents]);

  const changeHidden = (pk: number, isOn: boolean, index: number) => {
    let hidden = contentHidden;
    hidden[index] = !hidden[index];
    setContentHidden({ ...hidden });
    api.post(
      '/api/v1/contents/update/shown',
      {
        contents: pk,
        isHidden: contentHidden[index],
      },
      {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      }
    );
  };

  return (
    <React.Fragment>
      {contentList
        ? contentList.map((content, index) => {
            return (
              <ContentListStyle key={index}>
                <div style={{ minWidth: '200px' }}>
                  <Thum src={`http://img.youtube.com/vi/${content.url}/mqdefault.jpg`}></Thum>
                </div>
                <ContentInfoStyle>
                  <Title className="sub ellipsis">{content.category}</Title>
                  <Title className="mid bold ellipsis">{content.title}</Title>
                  <Title className="sub ellipsis">{content.youtubeTitle}</Title>
                  <div>
                    {content.problems.split(',').map((bedge, index) => (
                      bedge === " " ? null : <Badge key={index}>{bedge}</Badge>
                      ))}
                  </div>
                  <Title className="sub">{content.registered}</Title>
                </ContentInfoStyle>

                <SwitchWrapStyle>
                  <Switch
                    onClick={() => changeHidden(content.pk, !contentHidden[index], index)}
                    isOn={contentHidden[index] ? false : true}
                  />
                  <Title className="sub">
                    {contentHidden[index] ? '영상 비공개중' : '영상 공개중'}
                  </Title>
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

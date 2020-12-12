import React from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import Title from '../Atoms/AtomTitle';
import Thum from '../Atoms/AtomThum';
import Badge from '../Atoms/AtomBadge';
import Switch from '../Atoms/AtomSwitch';
import SettingSet from '../../components/Rights/SettingSet';

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
  margin-right: auto;
  margin-left: 50px;
`;

const SwitchWrapStyle = styled.div`
  text-align: center;
`;

function ContentList() {
  return (
    <ContentListStyle>
      <div style={{ width: '200px' }}>
        <Thum></Thum>
      </div>
      <ContentInfoStyle>
        <Title className="sub">시사상식</Title>
        <Title className="mid bold">노래 가사로 배우는 영어 회화 1</Title>
        <Title className="sub">Will Smith - Prince Ali (From “Aladdin”)</Title>
        <div>
          <Badge>단어</Badge>
          <Badge>문장</Badge>
          <Badge>더빙</Badge>
          <Badge>문제</Badge>
        </div>
        <Title className="sub">2020-06-10 14:25</Title>
      </ContentInfoStyle>

      <SwitchWrapStyle>
        <Switch className="on" />
        <Title className="sub">영상 비공개중</Title>
      </SwitchWrapStyle>

      <SettingSet>
        <Title className="sub">영상 수정하기</Title>
        <Title className="sub">영상 삭제하기</Title>
      </SettingSet>
    </ContentListStyle>
  );
}

export default ContentList;

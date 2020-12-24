import React, { useEffect, useState } from 'react';
import LayoutFlex from '../../../components/Atoms/AtomLayoutFlex';
import Label from '../../../components/Atoms/AtomLabel';
import Title from '../../../components/Atoms/AtomTitle';
import Caption from '../../../components/Rights/Caption';
import Button from '../../../components/Atoms/AtomButton';
import api from '../../../router/api';

const LeftSize = {
  width: '100%',
  height: '100%',
};
const rightSize = {
  width: '100%',
  height: '100%',
};

const CaptionsEn = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'sit amet, consectetur adipiscing elit. urpis, ut viverra sem.',
  'Lorem , consectetur adipiscing elit. Vivamus id veem.',
  'LoremLoremLoremLoremLoremLo turpis, ut viverra sem.',
];

const CaptionsKo = [
  '한국번역ur adipiscing elit. Vivamus id verra sem.',
  '한국번역2ctetur adipiscing elit. Vivamus id vehica sem.',
  '하눅Lorem , consectetur adipiid vehicula turpis, ut viverra sem.',
  '한국한국LoremLoremLoremLoremLoremLoremLorem iverra sem.',
];

interface VideoProps {
  contentKey?: string | undefined;
}

function Sentence({ contentKey }: VideoProps) {
  const [captionEn, useCaptionEn] = useState(CaptionsEn);
  const [captionKo, useCaptionKo] = useState(CaptionsKo);

  useEffect(() => {
    api.get;
  });
  return (
    <React.Fragment>
      <LayoutFlex className="justify_btw">
        <div style={LeftSize}>
          <Label className="mid">영어 가사/캡션</Label>
          <Title className="sub mb_12">
            영어 원문 또는 한국어 번역을 직접 수정하려면 입력창을 클릭하세요.
          </Title>
          <Caption data={captionEn} />
        </div>
        <div style={rightSize} className="ml_24">
          <Label className="mid">한국어 뜻 (자동으로 입력됩니다)</Label>
          <Title className="sub mb_12"></Title>
          <Caption data={captionKo} />
        </div>
      </LayoutFlex>
      <div className="mt_40">
        <Button className="pull_left gray">이전</Button>
        <Button className="pull_right">저장하고 다음으로</Button>
      </div>
    </React.Fragment>
  );
}

export default Sentence;

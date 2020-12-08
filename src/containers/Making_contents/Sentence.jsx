import React, { useState } from "react";
import Layout2 from '../../components/Atoms/AtomLayout2'
import Label from '../../components/Atoms/AtomLabel'
import Subscript from '../../components/Atoms/AtomSubscript'
import Caption from '../../components/Rights/Caption'
import Button from '../../components/Atoms/AtomButton'


const LeftSize = {
  width: '100%'
}
const rightSize = {
  width: '100%'
}


const CaptionsEn = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id vehicula turpis, ut viverra sem.',
  'sit amet, consectetur adipiscing elit. Vivamus id vehicula turpis, ut viverra sem.',
  'Lorem , consectetur adipiscing elit. Vivamus id vehicula turpis, ut viverra sem.',
  'LoremLoremLoremLoremLoremLoremLorem ipsum dolor sit amed vehicula turpis, ut viverra sem.',
]

const CaptionsKo = [
    '한국번역ur adipiscing elit. Vivamus id vehicula turpis, ut viverra sem.',
    '한국번역2ctetur adipiscing elit. Vivamus id vehicula turpis, ut viverra sem.',
    '하눅Lorem , consectetur adipiscing elit. Vivamus id vehicula turpis, ut viverra sem.',
    '한국한국LoremLoremLoremLoremLoremLoremLorem ipsum dolo한국한국LoremLoremLoremLoremLoremLoremLorem ipsum dolor sit amed vehicr sit amed vehicula turpis, ut viverra sem.',
]

function Sentence() {
  const [ captionEn, useCaptionEn ] = useState(CaptionsEn);
  const [ captionKo, useCaptionKo ] = useState(CaptionsKo);

  return (
    <React.Fragment>
      <Layout2 className="justify_btw">
        <div style={LeftSize}>
          <Label className="mid">영어 가사/캡션</Label>
          <Subscript className="mb_12">영어 원문 또는 한국어 번역을 직접 수정하려면 입력창을 클릭하세요.</Subscript>
          <Caption data={captionEn} />
        </div>
        <div style={rightSize} className="ml_24">
          <Label className="mid">`한국어 뜻 (자동으로 입력됩니다)`</Label>
          <Subscript className="mb_12"></Subscript>
          <Caption data={captionKo} />
        </div>
      </Layout2>
      <div>
        <Button className="pull_left gray">이전</Button>
        <Button className="pull_right">저장하고 다음으로</Button>
      </div>
    </React.Fragment>
  )
}

export default Sentence;

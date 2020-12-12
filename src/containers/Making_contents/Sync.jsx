import React from "react";
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex'
import VideoYoutube from '../../components/Atoms/AtomsVideo'
import Title from '../../components/Atoms/AtomTitle'
import { colorSet } from "../../components/Atoms/theme";
import SyncSettingSet from "../../components/Rights/Sync_Setting_Set";
import Button from '../../components/Atoms/AtomButton'

const youtubeOpt = {
  width: '100%',
  heigth: '100%',
  playerVars: {
    autoplay: 0,
  },
};

const LeftSize = {
  width: '100%'
}
const rightSize = {
  width: '100%',
  height: 'calc(100vh - 370px)',
  marginLeft: '34px',
  overflowY: 'auto',

}

const CaptionsEn = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'sit amet, consectetur adipiscing elit. urpis, ut viverra sem.',
  'Lorem , consectetur adipiscing elit. Vivamus id veem.',
  'LoremLoremLoremLoremLoremLo turpis, ut viverra sem.',
]


function Sync() {
  return (
    <React.Fragment>
      <LayoutFlex>
        <div style={LeftSize}>
          <VideoYoutube options={youtubeOpt} videoId="5fNYKEptpcg" />
          <Title className="sub mt_24" color={colorSet.black}>문장이 시작되고 끝나는 시점을 1초, 0.3초 단위로 조절할 수 있습니다.<br/>
          첫번째 문장이 끝나는 지점에서 바로 다음 문장을 시작하려면 잇고 끊기 버튼을 눌러주세요.<br/>
          영어문장 싱크를 맞추면 한국어 뜻 싱크도 자동으로 맞춰지므로 별도의 작업이 필요하지 않습니다.</Title>
        </div>
        <div style={rightSize}>
          {CaptionsEn ? CaptionsEn.map((caption, index) => (
            <SyncSettingSet key={index} data={caption}/>
          )): null}
        </div>
      </LayoutFlex>
      <div className="mt_40">
        <Button className="pull_left gray">이전</Button>
        <Button className="pull_right">저장하고 다음으로</Button>
      </div>
    </React.Fragment>
  );
}

export default Sync;

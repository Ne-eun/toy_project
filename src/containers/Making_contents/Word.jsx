import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../../components/Atoms/theme";
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex'
import Button from '../../components/Atoms/AtomButton'
import Input from '../../components/Atoms/AtomInput'
import Title from '../../components/Atoms/AtomTitle'
import closeX from '../../images/delete.png'

const RowStyle = styled.div`
  width: 100%;
  display: flex;
  &+& {
    margin-top: 20px;
  }
  > p {
    min-width: 65px;
    box-sizing: border-box;
    padding: 18px;
  }
  > img {
    width: 30px;
    height: 30px;
    margin-top: 18px;
    margin-left: 32px;
  }
`

const PlusButton = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-left: -60px;
  > p {
    margin-top: 16px;
  }
`
const LeftSize = {
  width: '100%',
  marginLeft: '-60px'
}
const rightSize = {
  width: '100%',
  marginLeft: '20px'
}

const data = [
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''},
  {en:'', ko: ''}
]


function Word() {
  const [ words, setWords ] = useState(data);

  return (
    <React.Fragment>
      <LayoutFlex>
        <div style={LeftSize}>
          <Title className="mb_8" style={{marginLeft: '64px'}}>단어</Title>
          {words.map((word, index) => (
            <RowStyle>
              <Title className="gray">{`#${index + 1}`}</Title>
              <Input placeholder="단어를 입력하세요" value={word.en}/>
            </RowStyle>
          ))}
        </div>
        <div style={rightSize}>
          <Title className="mb_8">한국어 뜻</Title>
          {words.map((word, index) => (
            <RowStyle>
              <Input key={index} placeholder="한국어 뜻을 입력하세요" value={word.ko}/>
              <img src={closeX} alt="닫기"/>
            </RowStyle>
          ))}
        </div>
      </LayoutFlex>
      <PlusButton>
        <Button className="plus"></Button>
        <Title className="gray">10칸 더 추가하기</Title>
      </PlusButton>
      <div className="mt_40">
        <Button className="pull_left gray">이전</Button>
        <Button className="pull_right">저장하고 다음으로</Button>
      </div>
    </React.Fragment>
  );
}

export default Word;

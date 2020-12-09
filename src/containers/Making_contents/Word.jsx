import React, { useState } from "react";
import styled from "styled-components";
import LayoutFlex from '../../components/Atoms/AtomLayoutFlex'
import Button from '../../components/Atoms/AtomButton'
import Input from '../../components/Atoms/AtomInput'
import Title from '../../components/Atoms/AtomTitle'
import RowWrap from '../../components/Atoms/AtomRowWrap'

const PlusButton = styled.div`
  text-align: center;
  margin-top: 50px;
  > p {
    margin-top: 16px;
  }
`
const LeftSize = {
  width: '100%'
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
            <RowWrap>
              <Title className="gray">{`#${index + 1}`}</Title>
              <Input placeholder="단어를 입력하세요" value={word.en}/>
            </RowWrap>
          ))}
        </div>
        <div style={rightSize}>
          <Title className="mb_8">한국어 뜻</Title>
          {words.map((word, index) => (
            <RowWrap>
              <Input key={index} placeholder="한국어 뜻을 입력하세요" value={word.ko}/>
              <Button className="close"></Button>
            </RowWrap>
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

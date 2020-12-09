import React, { useState } from "react";
import styled from "styled-components";
import RowWrap from '../../components/Atoms/AtomRowWrap'
import Button from '../../components/Atoms/AtomButton'
import Input from '../../components/Atoms/AtomInput'
import Title from '../../components/Atoms/AtomTitle'
import Textarea from "../../components/Atoms/AtomTextarea";

const QuizSet = styled.div`
  padding: 0 65px;
  > textarea {
    margin-top: 16px;
    font-size: 19px;
    border-radius: 12px;
    border: none;
  }
`
const RowWrapOverSize = [
  {marginLeft: '-65px'},
  {marginRight: '-130px'}
]

const data = [
  {
    title : '',
    scription : '',
    answers : [
      '',
      '',
      '',
      '',
      '',
    ]
  }
]


function Quiz() {
  const [ quizs, setWords ] = useState(data[0]);

  return (
    <React.Fragment>
      <QuizSet>
        <RowWrap style={RowWrapOverSize[0]}>
          <Title className="gray">#1</Title>
          <Input placeholder="문제를 입력해주세요" />
          <Button
            style={RowWrapOverSize[1]}
            className="close"
          ></Button>
        </RowWrap>
        <Textarea rows="5" placeholder="지문을 입력하거나 이미지를 올려주세요" />
      </QuizSet>
      <div className="mt_40">
        <Button className="pull_left gray">이전</Button>
        <Button className="pull_right">저장하고 다음으로</Button>
      </div>
    </React.Fragment>
  );
}

export default Quiz;

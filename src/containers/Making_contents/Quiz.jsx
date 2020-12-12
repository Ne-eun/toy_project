import React, { useState } from "react";
import styled from "styled-components";
import RowWrap from '../../components/Atoms/AtomRowWrap'
import Button from '../../components/Atoms/AtomButton'
import Input from '../../components/Atoms/AtomInput'
import Title from '../../components/Atoms/AtomTitle'
import Textarea from "../../components/Atoms/AtomTextarea";
import AnswerSet from '../../components/Rights/AnswerSet'
import ExQuiz from "../../components/Rights/Ex_Quiz"
import QuizPreview from "../../components/Rights/Quiz_Preview"

const QuizSet = styled.div`
  padding-right: 65px;
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


function Quiz() {
  const [ quizs, setQuizs ] = useState([
    {
      quiz : '',
      quizSub: '',
      answers : [
        '',
        '',
        '',
        '',
        '',
      ],
      scription : ''
    }
  ]);

  return (
    <QuizSet>
      <RowWrap style={RowWrapOverSize[0]}>
        <Title className="gray">#1</Title>
        <Input placeholder="문제를 입력해주세요" />
        <Button
          style={RowWrapOverSize[1]}
          className="close"
        ></Button>
      </RowWrap>
      <Textarea placeholder="지문을 입력하거나 이미지를 올려주세요" />

      <div className="mt_12">
        <AnswerSet num="1" placeholder="답변을 작성해주세요" value={''}></AnswerSet>
        <AnswerSet num="2" placeholder="답변을 작성해주세요" value={''}></AnswerSet>
        <AnswerSet num="3" placeholder="답변을 작성해주세요" value={''}></AnswerSet>
        <AnswerSet num="4" placeholder="답변을 작성해주세요" value={''}></AnswerSet>
      </div>

      <Textarea rows="10" placeholder="해설을 입력해주세요 (생략 가능)" />
      <ExQuiz />
      <div style={{textAlign: 'center'}}>
        <Button className="mt_28 secondary">문제열에 추가하기</Button>
      </div>
      <QuizPreview data={quizs}></QuizPreview>
      <div className="mt_40">
        <Button className="pull_left gray">이전</Button>
        <Button className="pull_right">저장하고 끝내기</Button>
      </div>
    </QuizSet>
  );
}

export default Quiz;

import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";
import Title from '../Atoms/AtomTitle'
import questionImg from '../../images/questionImg.png'

const QuizPreviewStyle = styled.div`
	width: 100%;
	margin-top: 28px;
	padding: 20px;
	background-color: rgba(112, 112, 112, 0.66);
	border-radius: 12px;
	color: white;
	max-height: 550px;
	overflow-y: auto;
	box-sizing: border-box;

`

const TopHeaderStyle = styled.div`
	display: flex;
		justify-content: space-between;
		p {
			color: white;
			&.noti {
				position: relative;
				padding-left: 24px;
				&:before {
					content: "";
					position: absolute;
					top: 6px;
					left: 0;
					width: 16px;
					height:16px;
					background-color: ${colorSet.primary};
					border-radius: 8px;
					padding: 4px;
					box-sizing: border-box;
				}
				&:after {
					content: "";
					position: absolute;
					top: 10px;
					left: 4px;
					width: 8px;
					height: 8px;
					background-color: white;
					border-radius: 4px;
				}
			}
		}
`
const QuizItemsStyle = styled.div`
	margin: 20px -12px -12px -12px;
	.item {
		position: relative;
		display: inline-block;
		margin: 12px;
		width: calc((100% - 120px) / 5);
		padding-bottom: 20%;
		background-color: white;
		> p {
			position: absolute;
			top: 8px;
			left: 8px;
			color: black;
		}
		> img {
			position: absolute;
			width: 100%;
			top: 36px;
		}
	}
`
function ExQuiz({data}) {
	const [ testdata, setTextdata ] = useState([
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
		},
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
	<QuizPreviewStyle>
		<TopHeaderStyle>
			<Title className="noti">1번문제가 추가되었습니다.</Title>
			<Title>미리보기</Title>
		</TopHeaderStyle>

		<QuizItemsStyle>
			{testdata ? testdata.map((el, index) => (
				<div className="item">
					<p>#{index}</p>
					<img src={questionImg} alt=""/>
				</div>
			)) : null}
			
		</QuizItemsStyle>
	</QuizPreviewStyle>
  );
}

export default ExQuiz;
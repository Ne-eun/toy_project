import React from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";
import Title from '../Atoms/AtomTitle'
//img
import uploadImage from '../../images/uploadImage.png'
import checkBlue from '../../images/checkBlue.png'
import youtubeBlack from '../../images/youtubeBlack.png'

const ExQuizStyle = styled.div`
	width: 100%;
	background-color: rgba(255, 227, 25, 0.25);
	padding: 24px 45px;
	box-sizing: border-box;
	box-shadow: 0 3px 6px ${colorSet.shadow};
	margin-top: 36px;
	border-radius: 8px;
	> p {
		font-size: 16px;
	}
	> .row {
		display: flex;
		margin-top: 12px;
		> img {
			width: 20px;
			margin-right: 8px;
		}
	}
`

function ExQuiz() {
  return (
	<ExQuizStyle>
		<Title>작성 시 참고 해주세요!</Title>
		<div className="row">
			<img src={uploadImage}></img>
			<Title className="sub">텍스트를 입력하지 않은 경우, 내 컴퓨터에서 이미지를 불러오는 것으로 입력을 대신할 수 있습니다.</Title>
		</div>

		<div className="row">
			<img src={checkBlue}></img>
			<Title className="sub">답변을 작성한 뒤 체크하면 정답을 지정할 수 있습니다. 복수의 답변을 정답으로 지정할 수 있습니다.</Title>
		</div>

		<div className="row mb_4">
			<img src={youtubeBlack}></img>
			<Title className="sub">해설 텍스트의 경우 유튜브 영상 링크를 붙여넣기 할 수도 있습니다.</Title>
		</div>
	</ExQuizStyle>
  );
}

export default ExQuiz;
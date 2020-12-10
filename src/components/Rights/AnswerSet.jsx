import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";
import Button from '../../components/Atoms/AtomButton'
import CheckInput from './Check_Input'


const AnswerSetStyle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	&+& {
		margin-top: 12px;
	}
`
const RoundNumstyle = styled.div`
	min-width: 24px;
	width: 24px;
	height: 24px;
	border: 2px solid ${colorSet.black};
	border-radius: 12px;
	box-sizing: border-box;
	margin-bottom: 1px;
	margin-right: 16px;
	text-align: center;
	line-height: 1.3;
`
function AnswerSet ({ num, placeholder }) {

  return (
		<AnswerSetStyle>
			<RoundNumstyle className={num}>{num}</RoundNumstyle>
			<CheckInput placeholder={placeholder}></CheckInput>
			<Button className="close ml_12"></Button>
		</AnswerSetStyle>
  )
}

export default AnswerSet;

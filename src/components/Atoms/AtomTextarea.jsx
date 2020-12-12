import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "./theme";

const TextareaStyle = styled.textarea`
	width: 100%;
	padding: 12px 16px;
	font-size: 16px;
	font-weight: 300;
	color: ${colorSet.subtitle};
	background-color: #F4F4F4;
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid ${colorSet.border};
	box-sizing: border-box;
	resize: none;
	height: ${props => props.height + 'px'};
	&::placeholder {
		color: #c5c4c4;
		font-weight: 300;
	}
`

function Textarea({ placeholder, children }) {
	const minHeight = 68;
	const [ height, setHeight ] = useState(minHeight);
	
	const changeHeight = (e) => {
		let thisHeight = e.target.scrollHeight;
		if(thisHeight > minHeight) {
			setHeight(thisHeight);
		} else {
			setHeight(minHeight);
		}
	}

  return (
		<TextareaStyle
			placeholder={ placeholder }
			onChange={changeHeight}
			height={height}
		>
			{ children }
		</TextareaStyle>
  );
}

export default Textarea;

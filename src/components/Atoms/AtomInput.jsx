import React, { Children } from "react";
import styled, { css } from "styled-components";
import { colorSet } from "./theme";

const InputStyle = styled.input`
	width: 100%;
	padding: 18px;
	font-size: 19px;
	color: ${colorSet.black};
	border-radius: 12px;
	background-color: #F4F4F4;
	box-shadow: 0 3px 6px #00000029;
	border: none;
	box-sizing: border-box;

	&::placeholder {
		color: #c5c4c4;
		font-weight: 300;
	}

	&:disabled {
		background-color: transparent;
		box-shadow: none;
		font-size: 14px;
		color: ${colorSet.black};
	}
`;

const LabelStyle = styled.label`
	display: inline-block;
	font-size: 17px;
	color: ${colorSet.black};
	font-weight: bold;
	margin-bottom: 8px;
`

function InputSet({ placeholder, value, disabled, name }) {
  return (
		<InputStyle name={name} placeholder={placeholder} value={value} disabled={disabled} />
  );
}

export default InputSet;

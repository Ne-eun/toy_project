import React from "react";
import styled from "styled-components";
import { colorSet } from "./theme";

const SwitchStyle = styled.span`
	display: inline-block;
	position: relative;
	width: 34px;
	height: 18px;
	background-color: ${colorSet.border};
	border-radius: 9px;
	&:before {
		content: "";
		position:absolute;
		top: 4px;
		left: 4px;
		display: inline-block;
		width: 10px;
		height: 10px;
		background-color: white;
		border-radius: 5px;
		transition: left 0.2s;
	}
	&.on {
		background-color: ${colorSet.primary};
		&:before {
			left: 20px;
		}
	}
`

function Switch({ className }) {
  return (
    <SwitchStyle className={className} />
  );
}

export default Switch;

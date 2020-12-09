import React from "react";
import styled from "styled-components";
import { colorSet } from "./theme";

const TitleStyle = styled.p`
	line-height: 1.5;
	color: ${props => props.color ? props.color : colorSet.black};
	font-size: 18px;
	font-weight: 400;
	&.sub {
		font-size: 13px;
		color: ${props => props.color ? props.color : colorSet.subtitle};
	}
	&.bold {
		font-weight: 500;
	}
	&.gray {
		color: ${colorSet.subtitle};
	}
`

function Title({ color, children, className, style }) {
  return (
	<TitleStyle className={className} color={color} style={style}>{children}</TitleStyle>
  );
}

export default Title;
import React from "react";
import styled from "styled-components";
import { colorSet } from "./theme";

const SubscriptStyle = styled.p`
	height: 20px;
	color: ${props => props.color ? props.color : colorSet.subtitle};
	font-size: 13px;
	font-weight: 300;
`

function Subscript({ color, children, className }) {
  return (
	<SubscriptStyle className={className} color={color}>{children}</SubscriptStyle>
  );
}

export default Subscript;

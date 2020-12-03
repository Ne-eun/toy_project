import React from 'react';
import styled from 'styled-components';
import { ColorSet } from './var';


const ArrowStyle = styled.span`
	position: absolute;
	&:after {
		display: block;
		content: "";
		width: 7px;
		height: 7px;
		border: 2px solid ${props => props.Color ? props.Color : ColorSet.primary};
		border-left: none;
		border-top: none;
		transform: ${props => props.on ? 'rotate(-135deg)' : 'rotate(45deg)'};
		transition: transform 0.2s;
	}
`

function Arrow({Color, ...rest}) {
	return(
	<ArrowStyle on={false} Color={Color} {...rest}></ArrowStyle>
	)
};

export default Arrow;
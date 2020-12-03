import React from 'react';
import styled from 'styled-components';

const GoUrlStyle = styled.a`
margin-top: 80px;
padding-left: 4px;
font-size: 15px;
text-decoration: underline;
font-weight: 400;
`

function GoUrl({ title, Style }) {
	return(
		<GoUrlStyle style={ {Style} }>{ title }</GoUrlStyle>
	)
}
export default GoUrl;
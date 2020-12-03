import React from 'react';
import styled from 'styled-components';
import '../css/general.css'
import LeftWrap from '../components/Left/Left_Wrap'
import RightContents from '../router/Right_Contents.jsx'

const AdminStyle = styled.div`
	display: flex;
	position: relative;
`

function Administrator() {
	return(
		<AdminStyle>
			<LeftWrap />
			<RightContents />
		</AdminStyle>
	)
}

export default Administrator;
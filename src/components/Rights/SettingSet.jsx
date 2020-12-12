import React from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme'
import Button from '../Atoms/AtomButton'


const SettingStyle = styled.div`
	width: 120px;
	height: 100%;
	margin-left: 50px;
	padding-top: 20px;
`

const MenuWrapStyle = styled.div`
	margin-left: 20px;
	margin-top: -20px;
	padding: 12px;
	border-radius: 3px;
	box-shadow: 1px 1px 5px ${colorSet.shadow};
	background-color: white;
	text-align: center;
	p+p {
		margin-top: 12px;
	}
`

function SettingSet({ children }) {
  return (
			<SettingStyle>
				<Button className="setting"/>
				<MenuWrapStyle>
					{children}
				</MenuWrapStyle>
			</SettingStyle>
  );
}

export default SettingSet;

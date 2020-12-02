import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom'
import logo from '../images/headerLogo.png';
import LeftNavMenu from './Left_Nav_Menu';

function LeftNav() {
	return (
		<div className="left_nav">
			<div className="top_title">
				<img className="logo" src={ logo } alt=""/>
				<p className="title">관리자</p>
			</div>

			<LeftNavMenu />
			<LeftNavMenu />
			<LeftNavMenu />
			<LeftNavMenu />
			<LeftNavMenu />
			<LeftNavMenu />
			<LeftNavMenu />
			
			<div className="goback">
				<Link to="/">1 hour로 돌아가기</Link>
			</div>
		</div>
	)
}

export default LeftNav;
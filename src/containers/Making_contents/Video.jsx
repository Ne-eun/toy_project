import React from 'react';

function Video() {
	return (
		<>
			<div className="menu_wrap">
				<p>콘텐츠 만들기<span className="arrow on"></span></p>
				<ul className="on">
					<li>영상 마법사</li>
					<li>문장 만들기</li>
					<li>싱크 맞추기</li>
					<li>단어 만들기</li>
					<li>문제 만들기</li>
				</ul>
			</div>

			<div className="menu_wrap">
				<p>콘텐츠 관리<span className="arrow"></span></p>
				<ul>
					<li>콘텐츠 관리</li>
					<li>과제마감 관리</li>
				</ul>
			</div>
			
			<div className="menu_wrap">카테고리 관리</div>
			<div className="menu_wrap">플레이리스트 관리</div>
			<div className="menu_wrap">배너 관리</div>
			<div className="menu_wrap">회원 관리</div>
			<div className="menu_wrap">기관 관리</div>
		</>
	)
}

export default Video;
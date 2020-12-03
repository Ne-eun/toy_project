import React from 'react';
import styled from 'styled-components';
import LeftTop from './Left_Top'
import LeftNavMenu from './Left_Nav_Menu'
import GoUrl from '../Atoms/AtomGo_Url'

const LeftWrapStyle = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	min-width: 240px;
	padding-left: 25px;
	padding-right: 40px;
	box-shadow: 0 3px 6px #00000029;
	box-sizing: border-box;
	background-color: white;
	z-index: 3;
`

const NavMenus = [
	{
		title: '콘텐츠 만들기',
		items: [
			{
				title: '영상 마법사',
				link: '/'
			},
			{
				title: '문장 만들기',
				link: '/'
			},
			{
				title: '싱크 맞추기',
				link: '/'
			},
			{
				title: '단어 만들기',
				link: ''
			},
			{
				title: '문제 만들기',
				link: ''
			}
		]
	}, 
	{
		title: '콘텐츠 관리',
		items: [
			{
				title: '콘텐츠 관리',
				link: ''
			},
			{
				title: '과제마감 관리',
				link: ''
			}
		]
	},
	{title: '카테고리 관리'},
	{title: '플레이리스트 관리'},
	{title: '배너 관리'},
	{title: '회원 관리'},
	{title: '기관 관리'}
]

function LeftWrap() {
	return (
		<LeftWrapStyle>
			<LeftTop />

			<LeftNavMenu data={NavMenus}/>
			<GoUrl title="1hour로 돌아가기" />
		</LeftWrapStyle>
	)
}

export default LeftWrap;
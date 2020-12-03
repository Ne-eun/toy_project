import React from 'react';
import styled from 'styled-components';
import { ColorSet } from '../Atoms/var';

const MenuNavStyle = styled.div`
		font-size: 19px;
		color: $black;
		font-weight: bold;
		line-height: 50px;

		> p {
			position: relative;
			.arrow {
				right: 2px;
				top: 8px;
			}
		}

		> ul {
			/* max-height: 0; */
			overflow: hidden;
			list-style: none;
			background: ${ColorSet.backgray};
			color: ${ColorSet.subtitle};
			border-radius: 3px 3px;
			transition: max-height 1s ease;

			li {
				line-height: 1.5;
				margin: 10px 34px;
				font-size: 16px;
				font-weight: normal;
			}
		}
`
function LeftNavMenu({ data }) {
	return (
		<React.Fragment>
			{data.map(navMenus => (
				<MenuNavStyle>
					<p>{navMenus.title}</p>
					{navMenus.items ? (
						<ul>
							{navMenus.items.map(menuList => (
								<li>{menuList.title}</li>
							))}
						</ul>
						) : null}
				</MenuNavStyle>
			))}
		</React.Fragment>
	)
}

export default LeftNavMenu;
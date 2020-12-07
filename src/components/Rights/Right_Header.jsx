import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { colorSet } from "../Atoms/theme";

const RightHeaderStyle = styled.div`
    border-bottom: 2px solid ${colorSet.backgray};
    margin-bottom: 40px;
`

const HeaderTitleStyle = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colorSet.black};
`

const HeaderSubStyle = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  color: ${colorSet.subtitle};
	
	li {
		min-width: 84px;
		text-align: center;
		padding: 12px 8px;
    box-sizing: border-box;
		& + li {
			margin-left: 16px;
    }
    a {
      text-decoration: none;
      color: ${colorSet.subtitle}
    }

		&.on {
      position: relative;
      a {
        color: ${colorSet.black};
			  font-weight: bold;
      }
			&:after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 8px;
				background-color: ${colorSet.primary};
			}
    }
    
	}
`

function RightHeader({ data, location }) {
  return (
    <RightHeaderStyle>
      <HeaderTitleStyle>{ data.title }</HeaderTitleStyle>

      <HeaderSubStyle>
        { data.subtitle ? data.subtitle.map((submenu, index) => {
          return (
            <li className={location.pathname === submenu.link ? 'on' : null} key={index}>
              <Link>{submenu.title}</Link>
            </li>
          )
        }) : null}

      </HeaderSubStyle>
    </RightHeaderStyle>
  )
}

export default withRouter(RightHeader);

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';

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
    cursor: pointer;
    & + li {
      margin-left: 16px;
    }
    a {
      text-decoration: none;
      color: ${colorSet.subtitle};
    }

    &.on {
      position: relative;
      color: ${colorSet.black};
      font-weight: bold;
      a {
        color: ${colorSet.black};
        font-weight: bold;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: ${colorSet.primary};
      }
    }
  }
`;

interface subMenusType {
  title: string;
  link: string | number;
}

interface menusProps {
  menus: subMenusType[];
  nowFilter?: number;
  onClick?: (categoryPK: number) => void;
}

//Menu의 type이 filter일 때, link에 카테고리의 고유값, nowFilter(on상태를 체크하기 위해 필요), onclick(메뉴클릭시 메뉴의 카테고리 값을 던짐)
//Menu의 type이 Link일 때 메뉴를 누르면 해당 링크로 url를 이동함

function SubMenu({ menus, nowFilter, onClick }: menusProps) {
  if (onClick === undefined) {
    return (
      <HeaderSubStyle>
        {menus
          ? menus.map((menu, index) => (
              <li className={menu.link === location.pathname ? 'on' : undefined} key={index}>
                <Link to={menu.link}>{menu.title}</Link>
              </li>
            ))
          : null}
      </HeaderSubStyle>
    );
  } else {
    //filter type menu
    return (
      <HeaderSubStyle>
        {menus
          ? menus.map((menu, index) => (
              <li
                onClick={() => onClick(menu.link)}
                className={menu.link === nowFilter ? 'on' : undefined}
                key={index}>
                {menu.title}
              </li>
            ))
          : null}
      </HeaderSubStyle>
    );
  }
}

export default SubMenu;

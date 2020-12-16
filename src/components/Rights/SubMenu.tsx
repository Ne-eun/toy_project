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
    & + li {
      margin-left: 16px;
    }
    a {
      text-decoration: none;
      color: ${colorSet.subtitle};
    }

    &.on {
      position: relative;
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
  link: string;
}

interface menusProps {
  menus: subMenusType[];
}

function SubMenu({ menus }: menusProps) {
  return (
    <HeaderSubStyle>
      {menus
        ? menus.map((menu, index) => (
        <li className={menu.link === location.pathname ? 'on' : undefined} key={index}>
          <Link to={menu.link}>{menu.title}</Link>
        </li>
      ))
      : null }
    </HeaderSubStyle>
  );
}

export default SubMenu;

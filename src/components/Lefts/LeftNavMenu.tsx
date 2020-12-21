import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TMenuType, TMenuItemType } from '../../containers/Admins/LeftWrap';
import { colorSet } from '../Atoms/theme';
import Arrow from '../Atoms/AtomArrow';

const MenuNavStyle = styled.div`
  font-size: 19px;
  color: ${colorSet.black};
  font-weight: bold;
  line-height: 50px;

  > p {
    position: relative;
    cursor: pointer;
  }

  > ul {
    max-height: 0;
    overflow: hidden;
    list-style: none;
    background: ${colorSet.backgray};
    color: ${colorSet.subtitle};
    border-radius: 3px 3px;
    transition: max-height 0.5s;

    &.on {
      max-height: 500px;
      transition: max-height 0.8s;
    }

    li {
      line-height: 1.5;
      margin: 10px 34px;
      font-size: 16px;
      font-weight: 300;
      &.on {
        font-weight: 500;
        color: ${colorSet.black}
      }
    }
  }
`;

interface LeftNavProps {
  menus: TMenuType[];
}

function LeftNavMenu({ menus }: LeftNavProps) {
  const [menu, setMenus] = React.useState(menus);
  let selectdMenu = new Array(menu.length).fill(false);
  const [menuvisible, setMenuvisible] = React.useState(selectdMenu);

  let location = useLocation();
  let history = useHistory();

  const onClickHandler = (index: number) => {
    selectdMenu[index] = !selectdMenu[index];
    setMenuvisible(selectdMenu);
    history.push(menus[index].link);
  };

  function retrunNowpath(items: {title: string, link: string}[]) {
    let now = 0;

    items.map((item) => {
      item.link === location.pathname ? now++ : 0;
    })

    if(now > 0) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <React.Fragment>
      {menu
        ? menu.map((menu: TMenuType, index: number) => {
            return (
              <MenuNavStyle key={index}>
                <p
                  onClick={() => {
                    onClickHandler(index);
                  }}
                >
                  {menu.title}{' '}
                 {' '}
                 {' '}
                  {menu.items ? <Arrow on={menuvisible[index] ? 1 : 0} /> : undefined}
                </p>

                {menu.items ? (
                  <ul
                    className={menuvisible[index] || retrunNowpath(menu.items) ? 'on' : undefined}
                  >
                    {menu.items.map((subMenu: TMenuItemType, index: number) => (
                      <li
                        key={index}
                        className={subMenu.link === location.pathname ? 'on' : undefined}
                      >
                        {subMenu.title}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </MenuNavStyle>
            );
          })
        : null}
    </React.Fragment>
  );
}

export default LeftNavMenu;

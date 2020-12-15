import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TMenuType, TMenuItemType } from '../../pages/Administrator';
import { colorSet } from '../Atoms/theme';
import Arrow from '../Atoms/AtomArrow';
import GoPage from '../Atoms/AtomGoPage';

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
      font-weight: normal;
    }
  }
`;

function LeftNavMenu(menus: TMenuType[]) {
  const [menu, setMenus] = React.useState(menus);

  let selectdMenu = new Array(menu.length).fill(false);
  const [menuvisible, setMenuvisible] = React.useState(selectdMenu);

  // useEffect(() => {
  //   menus.items
  //     ? menus.items.map((item: object, index: number) => {
  //         item.link === location.pathname ? ture : false;
  //       })
  //     : menus.map((menu: Object) => {
  //         menu.link === location.pathname ? ture : false;
  //       });
  // });
  let location = useLocation();
  let history = useHistory();

  const onClickHandler = (index: number) => {
    selectdMenu[index] = !selectdMenu[index];
    history.push(menus[index].link);
    setMenuvisible(selectdMenu);
  };

  return (
    <React.Fragment>
      {menus
        ? menus.map((menu: TMenuType, index: number) => {
            return (
              <MenuNavStyle>
                <p
                  onClick={() => {
                    onClickHandler(index);
                  }}
                >
                  {menu.title} {menu.items ? <Arrow on={menuvisible[index]} /> : undefined}
                </p>

                {menu.items ? (
                  <ul className={menuvisible[index] ? 'on' : undefined}>
                    {menu.items.map((subMenu: TMenuItemType, index: number) => (
                      <li key={index}>
                        <GoPage
                          to={subMenu.link}
                          title={subMenu.title}
                          className={subMenu.link === location.pathname ? 'on' : undefined}
                        />
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

// const onToggle = id => {
//   setUsers(
//     users.map(user =>
//       user.id === id ? { ...user, active: !user.active } : user
//     )
//   );
// };
// const validation = () => {
//
// };

// const selectIndex = (index) => {
//   const data = menu.map((data, itemIndex) => {
//     return {
//       ...data,
//       isVisible: index === itemIndex ? !data.isVisible : false,
//     };
//   });
//   setMenu(data);
// };

// <Arrow on={menuvisible[index] ? true : false} />

import React from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";
import Arrow from "../Atoms/AtomArrow";
import GoPage from "../Atoms/AtomGo_Page";

const MenuNavStyle = styled.div`
  font-size: 19px;
  color: $black;
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
      cursor: pointer;
    }
  }
`;

function LeftNavMenu({ data, onClick, itemIndex }) {
  const toggle = () => {
    onClick(itemIndex);
  };

  return (
    <React.Fragment>
      <MenuNavStyle>
        <p onClick={toggle}>
          {data.title} {data.items ? <Arrow on={data.isVisible} /> : null}
        </p>
        {data.items ? (
          <ul className={data.isVisible ? "on" : null}>
            {data.items.map((menuList, index) => (
              <li key={index}>
                <GoPage to={menuList.link} title={menuList.title} />
              </li>
            ))}
          </ul>
        ) : null}
      </MenuNavStyle>
    </React.Fragment>
  );
}

export default LeftNavMenu;

import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";
import Arrow from "../Atoms/AtomArrow";

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
    transition: max-height 0.8s;

    &.on {
      max-height: 500px;
    }

    li {
      line-height: 1.5;
      margin: 10px 34px;
      font-size: 16px;
      font-weight: normal;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

function LeftNavMenu({ data }) {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <React.Fragment>
      <MenuNavStyle>
        <p onClick={toggle}>
          {data.title} {data.items ? <Arrow on={isToggle} /> : null}
        </p>
        {data.items ? (
          <ul className={isToggle ? "on" : null}>
            {data.items.map((menuList, index) => (
              <li key={index}>{menuList.title}</li>
            ))}
          </ul>
        ) : null}
      </MenuNavStyle>
    </React.Fragment>
  );
}

export default LeftNavMenu;

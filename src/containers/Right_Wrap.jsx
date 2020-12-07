import React from "react";
import styled from "styled-components";
import RightRouter from "../router/Right_Router";

const RightWrapStyle = styled.div`
  padding: 110px 74px;
  margin-left: 240px;
  width: calc(100% - 240px);
  min-width: 830px;
  padding: 110px 74px;
`;

function RightWrap() {
  return (
    <RightWrapStyle>
      <RightRouter />
    </RightWrapStyle>
  );
}

export default RightWrap;

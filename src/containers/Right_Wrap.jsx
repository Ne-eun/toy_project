import React from "react";
import RightHeader from "../components/Rights/Right_Header";
import styled from "styled-components";
import MakingContents from "../router/Right_Router";
const RightWrapStyle = styled.div`
  padding: 110px 74px;
  margin-left: 240px;
  width: calc(100% - 240px);
  min-width: 830px;
  padding: 110px 74px;

  .right_header {
    border-bottom: 2px solid $backgray;
    margin-bottom: 40px;

    .title {
      font-size: 26px;
      font-weight: bold;
      color: $black;
    }
    .right_nav {
      width: 100%;
      font-size: 18px;
      color: $subtitle;
    }
  }
`;

function RightWrap() {
  return (
    <RightWrapStyle>
      <RightHeader />
      <MakingContents />
    </RightWrapStyle>
  );
}

export default RightWrap;

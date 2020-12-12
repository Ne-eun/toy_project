import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import LeftWrap from "../containers/Left_Wrap";
import RightWrap from "../containers/Right_Wrap";

const AdminStyle = styled.div`
  display: flex;
  position: relative;
`;

function Administrator() {
  return (
    <BrowserRouter>
      <AdminStyle>
        <LeftWrap />
        <RightWrap />
      </AdminStyle>
    </BrowserRouter>
  );
}

export default Administrator;

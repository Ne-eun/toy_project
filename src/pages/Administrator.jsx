import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/general.css";
import LeftWrap from "../containers/Left_Wrap";
import RightWrap from "../containers/Right_Wrap";

const AdminStyle = styled.div`
  display: flex;
  position: relative;
`;

function Administrator() {
  return (
    <AdminStyle>
      <Router>
        <LeftWrap />
        <RightWrap />
      </Router>
    </AdminStyle>
  );
}

export default Administrator;

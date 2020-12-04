import React from "react";
import styled from "styled-components";
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
      <LeftWrap />
      <RightWrap />
    </AdminStyle>
  );
}

export default Administrator;

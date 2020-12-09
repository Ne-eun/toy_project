import React from 'react';
import styled from 'styled-components';

const LayoutFlexStyle = styled.div`
  display: flex;
  .justify_btw {
    justify-content: space-between
  }
`;

function LayoutFlex({ children, className }) {
  return(
    <LayoutFlexStyle className={className}>{ children }</LayoutFlexStyle>
  )
}

export default LayoutFlex;

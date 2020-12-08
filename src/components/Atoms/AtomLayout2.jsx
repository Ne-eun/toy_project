import React from 'react';
import styled from 'styled-components';

const Layout2Style = styled.div`
  display: flex;
  .justify_btw {
    justify-content: space-between
  }
`;

function Layout2({ children, className }) {
  return(
    <Layout2Style className={className}>{ children }</Layout2Style>
  )
}

export default Layout2;

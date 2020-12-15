import React from 'react';
import styled from 'styled-components';

interface layoutflexProps {
  className?: 'justify_btw';
  children: React.ReactNode;
}
const LayoutFlexStyle = styled.div`
  display: flex;
  &.justify_btw {
    justify-content: space-between;
  }
`;

function LayoutFlex({ children, className }: layoutflexProps) {
  return <LayoutFlexStyle className={className}>{children}</LayoutFlexStyle>;
}

export default LayoutFlex;

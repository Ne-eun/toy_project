import React from 'react';
import styled from 'styled-components';

interface fieldsetType {
  children: React.ReactNode;
}
const FieldStyle = styled.div`
  margin-top: 24px;
  & + & {
    margin-top: 62px;
  }
`;

function FieldSet({ children }: fieldsetType) {
  return <FieldStyle>{children}</FieldStyle>;
}

export default FieldSet;

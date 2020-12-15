import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';

const HeaderTitleStyle = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colorSet.black};
`;

interface headerTitleProps {
  title: string;
}

function RightHeaderTItle({ title }: headerTitleProps) {
  return <HeaderTitleStyle>{title}</HeaderTitleStyle>;
}

export default RightHeaderTItle;

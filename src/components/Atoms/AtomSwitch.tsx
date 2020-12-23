import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

interface switchProps {
  className?: 'on';
  isOn: boolean;
  onClick: () => void;
}

const SwitchStyle = styled.span`
  display: inline-block;
  position: relative;
  width: 34px;
  height: 18px;
  background-color: ${colorSet.border};
  border-radius: 9px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 5px;
    transition: left 0.2s;
  }
  &.on {
    background-color: ${colorSet.primary};
    &:before {
      left: 20px;
    }
  }
`;

function Switch({ isOn, onClick }: switchProps) {
  return <SwitchStyle onClick={onClick} className={isOn ? 'on' : undefined} />;
}

export default Switch;

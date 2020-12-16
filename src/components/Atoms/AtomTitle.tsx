import React from 'react';
import { Interface } from 'readline';
import styled from 'styled-components';
import { colorSet } from './theme';

interface titleProps {
  children?: React.ReactNode;
  className?: 'big' | 'mid' | 'sub' | 'bold' | 'gray' | 'white';
  style?: React.CSSProperties;
  color?: string;
}

const TitleStyle = styled.p`
  line-height: 1.5;
  color: ${(props: titleProps) => (props.color ? props.color : colorSet.black)};
  font-size: 18px;
  font-weight: 400;
  &.big {
    font-size: 26px;
    font-weight: 600;
  }
  &.mid {
    font-size: 16px;
  }
  &.sub {
    font-size: 13px;
    height: 20px;
    color: ${(props: titleProps) => (props.color ? props.color : colorSet.subtitle)};
  }
  &.bold {
    font-weight: 600;
  }
  &.gray {
    color: ${colorSet.subtitle};
  }
  &.white {
    color: white;
  }
`;

function Title({ color, children, className, style }: titleProps) {
  return (
    <TitleStyle className={className} color={color} style={style}>
      {children}
    </TitleStyle>
  );
}

export default Title;

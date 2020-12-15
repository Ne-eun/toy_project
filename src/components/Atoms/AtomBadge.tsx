import React from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

interface badgeProps {
  className?: 'secondary';
  children: React.ReactNode;
}

const BadgeStyle = styled.span`
  font-size: 10px;
  background-color: ${colorSet.primary};
  color: ${colorSet.black};
  padding: 2px 4px;
  border-radius: 2px;
  & + & {
    margin-left: 4px;
  }
  &.secondary {
    background-color: ${colorSet.secondary};
    color: white;
  }
`;

function Badge({ className, children, ...rest }: badgeProps) {
  return (
    <BadgeStyle className={className} {...rest}>
      {children}
    </BadgeStyle>
  );
}

export default Badge;

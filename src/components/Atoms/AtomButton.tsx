import React from 'react';
import styled, { css } from 'styled-components';
import { colorSet } from './theme';

import plus from '../../images/addRow.png';
import closeX from '../../images/delete.png';
import setting from '../../images/setting.png';

interface buttonProps {
  children?: React.ReactNode;
  style?: object;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  className?:
    | 'small'
    | 'center'
    | 'pull_right'
    | 'pull_left'
    | 'secondary'
    | 'white'
    | 'info'
    | 'gray'
    | 'plus'
    | 'close'
    | 'setting';
}

const ButtonStyle = styled.button`
  ${(props: buttonProps) => {
    const { color, textColor } = props;

    return css`
      padding: 8px 20px;
      background-color: ${color ? color : colorSet.primary};
      color: ${textColor ? textColor : colorSet.black};
      font-size: 13px;
      font-weight: bold;
      border: none;
      border-radius: 6px;
      box-shadow: 0 3px 6px ${colorSet.shadow};
      cursor: pointer;
      &.small {
        font-size: 10px;
        padding: 4px 18px;
        border-radius: 4px;
      }
      &.center {
        margin: 0 auto;
      }
      &.pull_right {
        float: right;
      }

      &.pull_left {
        float: left;
      }

      &.secondary {
        background-color: ${colorSet.secondary};
        color: white;
      }

      &.white {
        background-color: white;
        color: ${colorSet.black};
        border: 1px solid ${colorSet.border};
      }

      &.info {
        background-color: ${colorSet.info};
        color: white;
      }

      &.gray {
        background-color: ${colorSet.gray};
        color: ${colorSet.subtitle};
      }
      &.plus {
        width: 45px;
        height: 45px;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
        background-image: url(${plus});
      }
      &.close {
        width: 31px;
        height: 31px;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
        background-image: url(${closeX});
      }
      &.setting {
        width: 20px;
        height: 20px;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
        background-image: url(${setting});
      }
    `;
  }}
`;

function Button({ color, textColor, className, children, ...rest }: buttonProps) {
  return (
    <ButtonStyle className={className} color={color} textColor={textColor} {...rest}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

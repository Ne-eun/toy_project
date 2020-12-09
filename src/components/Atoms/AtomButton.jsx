import React from "react";
import styled, { css } from "styled-components";
import { colorSet } from "./theme";

import plus from '../../images/addRow.png'

const ButtonStyle = styled.button`
  ${props => {
    const { color, textColor } = props;

    return css`
			padding: 8px 20px;
			background-color: ${color ? color : colorSet.primary};
			color: ${textColor ? textColor : colorSet.balck};
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
				color: ${colorSet.subtitle}
			}
			&.plus {
				background-color: transparent;
				box-shadow: none;
				background-image: url(${plus});
				width: 45px;
				height: 45px;
			}
    `;
  }}
`;

function Button({ color, textColor, className, children }) {
  return (
		<ButtonStyle
			className={className}
			color={color}
			textColor={textColor}
		>
      {children}
    </ButtonStyle>
  );
}

export default Button;

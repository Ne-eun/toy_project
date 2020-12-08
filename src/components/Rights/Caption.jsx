import React from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";

const CaptionBoxStyle = styled.div`
	width: 100%;
	box-sizing: border-box;
	border: 1px solid ${colorSet.border};
	color: ${colorSet.subtitle};
	font-weight: 300;
	font-size: 18px;

	.caption_wrap {
		display: flex;
		padding: 14px;
		box-sizing: border-box;
		background-color: ${colorSet.backgray};

		&:nth-child(2n-1) {
			background-color: white;
		}
		.line_decolation {
			min-width: 30px;
		}
		textarea {
			width: 100%;
			height: auto;
			border: none;
			line-height: 2;
			background-color: transparent;
		}
	}
`

function Caption({ data }) {
  return (
		<CaptionBoxStyle>
			{ data ? data.map((caption, index) => (
				<div className="caption_wrap">
						<div key={index} className="line_decolation">#</div>
						<textarea value={caption} disabled />
				</div>
			)) : null}
		</CaptionBoxStyle>
  );
}

export default Caption;

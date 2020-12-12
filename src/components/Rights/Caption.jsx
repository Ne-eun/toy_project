import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";

const CaptionBoxStyle = styled.div`
	width: 100%;
	box-sizing: border-box;
	border: 1px solid ${colorSet.border};
	color: ${colorSet.subtitle};
	font-weight: 300;
	font-size: 18px;
	box-shadow: 0 3px 6px ${colorSet.shadow};

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
			color: ${colorSet.subtitle};
			font-weight: 300;
			font-size: 18px;
			border: none;
			line-height: 1.5;
			background-color: transparent;
			resize: vertical;
		}
	}
`

function Caption({ data }) {
	const [ caption , setCaption ] = useState(data);

	function changeCaption(e, index) {
		// Caption's now data to change
		let thisCaption = e.target.value;
		let changedata = caption
		
		changedata[index] = thisCaption
		setCaption([...changedata])
	}

  return (
		<CaptionBoxStyle>
			{ caption ? caption.map((caption, index) => (
				<div key={index} className="caption_wrap">
						<div className="line_decolation">#</div>
						<textarea rows="2" value={caption} onChange={(e) => {changeCaption(e, index)}}></textarea>
				</div>
			)) : null}
		</CaptionBoxStyle>
  );
}

export default Caption;

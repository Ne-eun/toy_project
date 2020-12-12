import React from "react";
import styled from "styled-components";
import { colorSet } from "../Atoms/theme";
import Button from "../Atoms/AtomButton";

import playImg from '../../images/Icon feather-play-circle.png'
import stopImg from '../../images/Icon feather-stop-circle.png'
import leftForward from '../../images/Icon ionic-ios-fastforward-2.png'
import rightForward from '../../images/Icon ionic-ios-fastforward.png'

const SyncSettingSetStyle = styled.div`
	width: 100%;
	&+& {
		margin-top: 32px;
	}
	.captionArea {
		width: 100%;
		height: 68px;
		padding: 10px 18px;
		box-sizing: border-box;
		background-color: ${colorSet.backgray};
		box-shadow: 0 0 5px ${colorSet.shadow};
		border: 1px solid ${colorSet.border};
		border-radius: 5px;
		font-size: 13px;
		color: ${colorSet.subtitle};
		line-height: 1.5;
	}

	.setting_set_wrap {
		width: 100%;
		margin-top: 5px;
		.set_top {
			display: flex;
			justify-content: space-between;
			> span {
				padding: 2px 4px;
				text-align: center;
				font-size: 11px;
				font-weight: 300;
				color: #8D8D8D;
				background-color: white;
				border: 1px solid #8D8D8D;
				border-radius: 2px;
			}
		}

		.set_bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.items_mid {
				margin-top: 8px;
				 > img {
					 vertical-align: middle;
					 margin: 0 24px;
				 }
			}
		}
	}
`

const TimeSetStyle = styled.div`
	height: 16px;
	> span {
		margin: 0px 10px;
		font-size: 10px;
		color: ${colorSet.subtitle};
	}
`

function SyncSettingSet({data}) {
  return (
		<SyncSettingSetStyle>
			<div className="captionArea">{data}</div>
			
			<div className="setting_set_wrap">
				<div className="set_top">
					<span>00 : 00 : 00.0</span>
					<span>00 : 00 : 00.0</span>
				</div>

				<div className="set_bottom">
					<div className="items_left">
						<TimeSetStyle>
							<img src={leftForward} alt="leftForward"/>
							<span>1.0</span>
							<img src={rightForward} alt="rightForward"/>
						</TimeSetStyle>
						<TimeSetStyle>
							<img src={leftForward} alt="leftForward"/>
							<span>0.3</span>
							<img src={rightForward} alt="rightForward"/>
						</TimeSetStyle>
					</div>

					<div className="items_mid">
						<img src={playImg} alt="playImg" />
						<Button className="small">잇고 끊기</Button>
						<img src={stopImg} alt="stopImg"/>
					</div>

					<div className="items_right">
						<TimeSetStyle>
							<img src={leftForward} alt="leftForward"/>
							<span>1.0</span>
							<img src={rightForward} alt="rightForward"/>
						</TimeSetStyle>
						<TimeSetStyle>
							<img src={leftForward} alt="leftForward"/>
							<span>0.3</span>
							<img src={rightForward} alt="rightForward"/>
						</TimeSetStyle>
					</div>
				</div>
			</div>
		</SyncSettingSetStyle>
  );
}

export default SyncSettingSet;

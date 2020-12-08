import React from "react";
import styled from "styled-components";
import YouTube from 'react-youtube';


const YoutubeVideo = styled.div`
	position: relative;
	width: 100%;
	height: 0%;
	padding-bottom: 56.20%;
	.video169 {
		position: absolute;
		width: 100%;
		height:100%;
		left: 0;
		top: 0;
	}
`

function VideoYoutube({ options, videoId }) {
  return (
		<YoutubeVideo>
			<YouTube videoId={videoId} opts={options} className='video169'/>
		</YoutubeVideo>
  );
}

export default VideoYoutube;

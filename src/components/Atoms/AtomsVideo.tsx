import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { colorSet } from './theme';

interface videoProps {
  options: object;
  videoId: string;
  className: 'video169';
}

const YoutubeVideoStyle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.2%;
  background-color: ${colorSet.backgray};
  .video169 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

function VideoYoutube({ options, videoId, className }: videoProps) {
  return (
    <YoutubeVideoStyle>
      {videoId === '' ? null : (
        <YouTube videoId={videoId} opts={options} className={className} />  
      )}
    </YoutubeVideoStyle>
  );
}

export default VideoYoutube;

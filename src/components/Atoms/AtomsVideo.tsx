import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

interface videoProps {
  options: object;
  videoId: string;
  className: 'video169';
}

const YoutubeVideo = styled.div`
  position: relative;
  width: 100%;
  height: 0%;
  padding-bottom: 56.2%;
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
    <YoutubeVideo>
      <YouTube videoId={videoId} opts={options} className={className} />
    </YoutubeVideo>
  );
}

export default VideoYoutube;

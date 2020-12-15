import React from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

interface thumProps {
  src: string;
  className?: string;
}

const ThumStyle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.2%;
  background-color: ${colorSet.backgray};
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

function Thum({ src, className }: thumProps) {
  return (
    <ThumStyle className="thumb">
      <img className={className} src={src} />
    </ThumStyle>
  );
}

export default Thum;

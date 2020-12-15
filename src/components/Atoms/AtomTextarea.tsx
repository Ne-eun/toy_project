import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from './theme';

interface textareaProps {
  placeholder: string;
  height?: string;
  children?: React.ReactNode;
  rows?: number;
}

const TextareaStyle = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 300;
  color: ${colorSet.subtitle};
  background-color: #f4f4f4;
  box-shadow: 0 3px 6px #00000029;
  border: 1px solid ${colorSet.border};
  box-sizing: border-box;
  resize: none;
  height: ${(props: textareaProps) => props.height + 'px'};
  &::placeholder {
    color: #c5c4c4;
    font-weight: 300;
  }
`;

// function changeCaption(e, index) {
//   // Caption's now data to change
//   let thisCaption = e.target.value;
//   let changedata = caption;

//   changedata[index] = thisCaption;
//   setCaption([...changedata]);
// }

function Textarea({ placeholder, children, height, rows }: textareaProps) {
  const minHeight = 68;
  const [boxheight, setBoxHeight] = useState(minHeight);

  const changeHeight = (e: { target: { scrollHeight: number } }) => {
    let thisHeight = e.target.scrollHeight;
    if (thisHeight > minHeight) {
      setBoxHeight(thisHeight);
    } else {
      setBoxHeight(minHeight);
    }
  };

  return (
    <TextareaStyle rows={rows} placeholder={placeholder} onChange={changeHeight} height={height}>
      {children}
    </TextareaStyle>
  );
}

export default Textarea;

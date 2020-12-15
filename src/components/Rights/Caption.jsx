import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import Textarea from '../Atoms/AtomTextarea';

interface CaptionProps {
  data: Array<object>;
}

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
`;

function Caption({ data }: CaptionProps) {
  const [caption, setCaption] = useState(data);

  return (
    <CaptionBoxStyle>
      {caption
        ? caption.map((caption, index) => (
            <div key={index} className="caption_wrap">
              <div className="line_decolation">#</div>
              <Textarea placeholder="자막을 입력하세요">{caption}</Textarea>
            </div>
          ))
        : null}
    </CaptionBoxStyle>
  );
}

export default Caption;

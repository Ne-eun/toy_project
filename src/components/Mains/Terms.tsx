import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import privacyActive from '../../images/privacy_active.png';
import privacyInActive from '../../images/privacy_inActive.png';

const ThrmsStyle = styled.div`
  font-size: 14px;
  color: ${colorSet.black};
  text-decoration: none;
  text-align: left;
  > span {
    display: inline-block;
  }
  .underline {
    text-decoration: underline;
    margin: 0 4px;
  }
  .icon {
    width: 18px;
    height: 18px;
    background-size: 18px;
    vertical-align: -4px;
    margin-right: 4px;
    cursor: pointer;
    background-image: url(${privacyInActive});
    &.on {
      background-image: url(${privacyActive});
    }
  }
`;

interface TermsProps {
  className?: string;
}

function Terms({ className }: TermsProps) {
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <ThrmsStyle className={className}>
      <span
        onClick={() => {
          setAgreeTerms(!agreeTerms);
        }}
        className={agreeTerms ? 'icon on' : 'icon'}
      ></span>
      <span className="underline">회원약관</span>및
      <span className="underline">개인정보취급방침</span>에 동의합니다
    </ThrmsStyle>
  );
}

export default Terms;

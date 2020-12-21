import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSet } from '../Atoms/theme';
import Button from '../Atoms/AtomButton';

const SettingStyle = styled.div`
  width: 120px;
  height: 100%;
  margin-left: 50px;
  padding-top: 20px;
`;

const MenuWrapStyle = styled.div`
  display: ${(props) => (props.isOn ? 'block' : 'none')};
  margin-left: 20px;
  margin-top: -20px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 5px ${colorSet.shadow};
  background-color: white;
  text-align: center;
  p + p {
    margin-top: 12px;
  }
`;

interface settingSetProps {
  children: React.ReactNode;
}
function SettingSet({ children }: settingSetProps) {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <SettingStyle>
      <Button
        onClick={() => {
          setMenuOn(!menuOn);
        }}
        className="setting"
      />
      <MenuWrapStyle isOn={menuOn}>{children}</MenuWrapStyle>
    </SettingStyle>
  );
}

export default SettingSet;

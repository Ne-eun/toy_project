import React from "react";
import styled from "styled-components";

const RowStyle = styled.div`
width: 100%;
display: flex;
&+& {
	margin-top: 20px;
}
> p {
	min-width: 65px;
	box-sizing: border-box;
	padding: 18px;
}
> button {
	width: 30px;
	height: 30px;
	margin-top: 18px;
	margin-left: 32px;
}
`

function RowWrap({ children, className, ...rest }) {
  return (
		<RowStyle className={className} {...rest}>{children}</RowStyle>
  );
}

export default RowWrap;

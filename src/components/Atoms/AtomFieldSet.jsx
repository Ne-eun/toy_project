import React from "react";
import styled from "styled-components";

const FieldStyle = styled.div`
	margin-top: 24px;
	& + & {
		margin-top: 62px;
	}
}
`

function FieldSet({ children }) {
  return (
		<FieldStyle>{children}</FieldStyle>
  );
}

export default FieldSet;

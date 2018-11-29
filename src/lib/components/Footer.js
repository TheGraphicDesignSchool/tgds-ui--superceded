import styled from "styled-components";
import React from 'react'

const FooterStyle = styled.div`
  background: white;
  line-height: 5rem;
`


export default props => {
	return (
		<FooterStyle>
			{props.children}
		</FooterStyle>
	)
}

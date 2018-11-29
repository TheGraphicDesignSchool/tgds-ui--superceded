import styled from "styled-components";
import React from 'react'
import vars from '../vars'

const FooterStyle = styled.div`
  background: white;
  line-height: ${vars.footer.height};
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.5em;
  color: #ccc;
`


export default props => {
	return (
		<FooterStyle>
			{props.children}
		</FooterStyle>
	)
}

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
	cursor: pointer;
	line-height: 2rem;
	border: 1px solid blue;
`

export default props =>  (
	<StyledButton
		className={props.className}
		type={props.type}
		style={props.style}
		disabled={props.disabled || props.loading}
		aria-disabled={props.disabled || props.loading}
		onClick={props.onClick}
		onMouseEnter={props.onMouseEnter}
		onMouseLeave={props.onMouseLeave}
		onMouseDown={props.onMouseDown}
		onMouseOut={props.onMouseOut}
		onMouseOver={props.onMouseOver}
		onMouseUp={props.onMouseUp}>
		{/*{ props.loading && <Loader loaded={false} options={spinnerOptions} /> }*/}
		<b>{props.children}</b>
	</StyledButton>
)



import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.div`

`

export default props => {
	return (
		<ButtonStyle
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
		</ButtonStyle>
	)
}

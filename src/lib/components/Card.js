import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`

`

const Title = styled.div``

const Description = styled.div``

const Image = styled.div``

export default props => {
	return (
		<CardContainer>
			{ props.image && <Image ref={props.image} />}
			<Title>{props.title}</Title>
			<Description>{props.description}</Description>
		</CardContainer>
	)
}

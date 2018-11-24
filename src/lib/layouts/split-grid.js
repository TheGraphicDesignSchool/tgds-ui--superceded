import Splitter from 'react-splitter-layout2'
import React from 'react'
import styled from 'styled-components'

const Bo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
`
const B1 = styled(Bo)`
  background: tomato;
`
const B2 = styled(Bo)`
  border-color: tomato;
`

const B3 = styled(Bo)`
  border-color: blueviolet;
`

const Container = styled(Splitter)`
  background: rgba(0,0,0,.1);
`

export default props => {
    return (
        <Container>
            <B1>coucou</B1>
            <Container>
                <B3>coucou</B3>
                <B3>coucou</B3>
            </Container>
        </Container>
    )
}

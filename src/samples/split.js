import React from 'react'
import SplitGrid from "../lib/layouts/split-grid";
import styled from "styled-components";

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

export default () => {
    return (
        <SplitGrid components={[
            () => <B1>coucou 1</B1>,
            () => <B2>coucou 2</B2>,
            () => <B3>coucou 3</B3>,
            () => <B1>coucou 4</B1>,
            () => <B2>coucou 5</B2>,
            () => <B3>coucou 6</B3>,
        ]}/>
    )
}

import styled from 'styled-components';
import remcalc from '../utils/remcalc';
import React from 'react'

export const Box = styled.div`
  flex: 1 1 auto;
  position: relative;
`

export default styled(Box)`
  display: flex;
  flex-flow: column;
  padding-bottom: ${remcalc(60)};
`;

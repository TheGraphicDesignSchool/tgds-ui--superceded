import styled from 'styled-components';
import remcalc from '../utils/remcalc';
import React from 'react'
import {CBox} from "./containers";

export default styled(CBox)`
  padding-bottom: ${remcalc(60)};
`;

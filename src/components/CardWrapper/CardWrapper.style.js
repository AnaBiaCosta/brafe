import styled from 'styled-components'
import { breakpoints } from '../Layout'

export const Wrapper = styled.div`
  display: block;
  
  ${breakpoints.medium}{
    display:grid;
    grid-template-columns: 50% 50%;
  }
`

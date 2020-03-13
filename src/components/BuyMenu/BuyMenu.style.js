import styled from 'styled-components'
import { breakpoints }  from '../Layout'

export const Wrapper = styled.nav`
  width: 389px;
  height: 1053px;
  margin-right: 32px;
  background-color: #96AFB9;
  display: none;

${breakpoints.medium} {
  display:block;
}
`

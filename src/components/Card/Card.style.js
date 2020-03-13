import styled from 'styled-components'
import { breakpoints } from '../Layout'

export const CardBody = styled.div`
  width: 310px;
  padding: 24px 24px 0 24px;
  margin-bottom: 48px;
  box-sizing: border-box;
  color: #C594D2;
  background-color: #8E619C;

  ${breakpoints.medium}{
    width: 400px;
  }
`

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 900;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Info = styled.p`
  margin-bottom: 16px;
`

export const InfoBold = styled.span`
  font-weight: bold;
`

export const CardImg = styled.img`
  width: 100px;
  height: 100px
`

export const Button = styled.button`
  border: none;
  width: 180px;
  height: 52px;
  position: relative;
  top: 26px;
  font-size: 24px;
  font-weight: 900;
`
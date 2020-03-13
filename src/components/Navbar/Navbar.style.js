import styled from 'styled-components'

export const NavBody = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #334A52;
  padding: 8px 48px;
`

export const Nav = styled.nav`
  color: #F7F7EB;
`

export const NavList = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  margin-right: 16px;

  a{
    text-decoration: none;
    color: #F7F7EB;
    cursor: pointer;
  :hover {
    color: #96AFB9;
  }

  }
`

export const NavLink = styled.a`
  cursor: pointer;
  :hover {
    color: #96AFB9;
  }
`


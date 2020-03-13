import React from 'react'
import { Link } from 'react-router-dom'
import { NavBody, Nav, NavList, NavItem, NavLink } from './Navbar.style'

const navItens = [{'text':'comprar'}, {'text':'perfil'}, {'text':'carrinho'}]
const renderNavItem = () => (
  navItens.map((elm) => (
    <NavItem key={elm.text} >
      <Link to="/profile">{elm.text}</Link>
    </NavItem>
  ))
)

const Navbar = () => (  
  <NavBody>
    <img src="./img/nav-brand.png" />

    <Nav>
      <NavList>
        {renderNavItem()}
      </NavList>
    </Nav>
  </ NavBody>
)

export default Navbar
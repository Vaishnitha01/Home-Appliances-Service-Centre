import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import "./Navbar.css";

const Navbar = () => {

  return (
    <>
    <Nav>
      <Bars />
      <NavMenu>
          <NavLink to='/' activeStyle>Home</NavLink>
          <NavLink to='/about' activeStyle>About</NavLink>
          <NavLink to='/services' activeStyle>Services</NavLink>
          <NavLink to='/contact' activeStyle>Contact</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>SignIn/SignUp</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  );
};

export default Navbar;

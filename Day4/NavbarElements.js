import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 12;
  position: fixed;
  top: 0;
  width:100%;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.75rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #808080;
  }
  &.active {
    color: #808080;
  }
`;

export const Bars = styled.div`
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  
  
  text-align: center;
  margin-right: 2rem;
  border-radius: 100px
`;

export const NavBtnLink = styled(Link)`
  background: transparent;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 20px;
  box-shadow: none;
  &:hover {
    color: #808080;
  }
`;

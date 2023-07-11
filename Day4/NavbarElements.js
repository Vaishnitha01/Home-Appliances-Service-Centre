// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
// import styled from 'styled-components';
  
// export const Nav = styled.nav`
//   background: #63D471;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
// `;
  
// export const NavLink = styled(Link)`
//   color: #808080;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #000000;
//   }
// `;
  
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
  
// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   /* Second Nav */
//   /* margin-right: 24px; */
//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
  
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
  
// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: #000000;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
// `;




// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
// import styled from 'styled-components';

// export const Nav = styled.nav`
//   background: linear-gradient(to right, #FFD700, #FFA500);
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 1rem;
//   z-index: 12;
//   position: relative;
// `;

// export const NavLink = styled(Link)`
//   color: #333333;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 0.75rem;
//   height: 100%;
//   cursor: pointer;
//   font-weight: bold;
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: #808080;
//   }
//   &.active {
//     color: #808080;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #333333;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 50%;
//     right: 1rem;
//     transform: translateY(-50%);
//     font-size: 1.5rem;
//     cursor: pointer;
//     transition: color 0.2s ease-in-out;
//     &:hover {
//       color: #808080;
//     }
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-left: 1rem;
// `;

// export const NavBtnLink = styled(Link)`
//   background: transparent;
//   color: #ffffff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   font-weight: bold;
//   transition: color 0.2s ease-in-out;
//   margin-left: 1rem;
//   &:hover {
//     color: #808080;
//   }
// `;



import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #FF9899;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 12;
  position: relative;
`;

export const NavLink = styled(Link)`
  color: #333333;
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

export const Bars = styled(FaBars)`
  display: none;
  color: #333333;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #808080;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 1rem;
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
  box shadow: none;
  &:hover {
    color: #808080;
  }
`;

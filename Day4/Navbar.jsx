
// // import React, { useState } from "react";
// // import logoImg from './logo.png';
// // import {
// //   Nav,
// //   NavLink,
// //   Bars,
// //   NavMenu,
// //   NavBtn,
// //   NavBtnLink,
// // } from './NavbarElements';
// // import "./Navbar.css";


// // const Navbar = () => {
// //   const [isMenuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <div>
// //     <Nav>
// //       <div className="logo">
// //         <img src={logoImg} alt="Logo" />
// //       </div>
// //       <Bars onClick={toggleMenu} />
// //       <NavMenu className={isMenuOpen ? "menu open" : "menu"}>
// //         <NavLink to='/' activeStyle>Home</NavLink>
// //         <NavLink to='/about' activeStyle>About</NavLink>
// //         <NavLink to='/services' activeStyle>Services</NavLink>
// //         <NavLink to='/contact' activeStyle>Contact</NavLink>
// //       </NavMenu>
// //       <NavBtn>
// //         <NavBtnLink to='/login'>SignIn/SignUp</NavBtnLink>
// //       </NavBtn>
// //     </Nav>
    
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import logoImg from './logo.png';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
// import "./Navbar.css";


// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <Nav>
//         <div className="logo">
//           <img src={logoImg} alt="Logo" />
//         </div>
//         <Bars onClick={toggleMenu} />
//         <NavMenu className={isMenuOpen ? "menu open" : "menu"}>
//           <NavLink to='/' activeStyle>Home</NavLink>
//           <NavLink to='/about' activeStyle>About</NavLink>
//           <NavLink to='/services' activeStyle>Services</NavLink>
//           <NavLink to='/contact' activeStyle>Contact</NavLink>
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/login'>SignIn/SignUp</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logoImg from './logo.png';
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Nav>
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <Bars className={isMenuOpen ? "menu-icon active" : "menu-icon"} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </Bars>
        <NavMenu className={isMenuOpen ? "menu open" : "menu"}>
          <NavLink to='/' activeStyle>Home</NavLink>
          <NavLink to='/about' activeStyle>About</NavLink>
          <NavLink to='/services' activeStyle>Services</NavLink>
          <NavLink to='/contact' activeStyle>Contact</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>SignIn/SignUp</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;

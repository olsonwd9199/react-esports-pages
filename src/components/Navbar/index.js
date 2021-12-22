import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        
        <NavMenu>
        <img src='https://media.discordapp.net/attachments/651460340046889001/890373598957682688/Blugold_E_RGB-1-four-three.png?width=631&height=473' alt="logo" width= "100px" height="75px"></img>
        <NavLink to='/sign-up' activeStyle>
            Home
          </NavLink>
          <NavLink to='/ove' activeStyle>
            Overwatch
          </NavLink>

          <NavLink to='/rocket' activeStyle>
            Rocket Leauge
          </NavLink>
          <NavLink to='/val' activeStyle>
            Valorant
          </NavLink>
          <NavLink to='/leauge' activeStyle>
            Leauge of Legends
          </NavLink>
          <NavLink to='/smash' activeStyle>
            Smash
          </NavLink>
          <NavLink to='/csgo' activeStyle>
            CSGO
          </NavLink>
          <NavLink to='/apex' activeStyle>
            Apex
          </NavLink>
          <NavLink to='/lab' activeStyle>
            Lab
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink> 
          
          <NavLink to='/feedback' activeStyle>
            Feedback
          </NavLink> 
          <NavLink to='/intrest' activeStyle>
            Interest Check
          </NavLink> 

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;
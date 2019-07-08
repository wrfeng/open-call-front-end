import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    {/*{code here}*/}
   <NavLink to="/">Home</NavLink>
   <NavLink to="/calls">Calls</NavLink>
   <NavLink to="/orgs">Orgs</NavLink>

   </div>
  );
};

export default NavBar;
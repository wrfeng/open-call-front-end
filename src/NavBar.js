import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    {/*{code here}*/}
   <NavLink to="/">Home</NavLink>
   <NavLink to="/login">Login</NavLink>
   <NavLink to="/signup">Signup</NavLink>
   <NavLink to="/signout">Signout</NavLink>

   </div>
  );
};

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
    {localStorage.token ? (<div><NavLink to="/signout">Signout</NavLink>
   <NavLink to="/profile">Profile</NavLink></div>) : (<div><NavLink to="/login">Login</NavLink>
   <NavLink to="/signup">Signup</NavLink></div>)}
   
   
   </div>
  );
};

export default NavBar;
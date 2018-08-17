import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navigationBar">
      <NavLink to="/" exact={true} className="navbarlink" activeClassName="selected">Home</NavLink>
      <NavLink to="/container1" className="navbarlink" activeClassName="selected">Page 1</NavLink>
      <NavLink to="/container2" className="navbarlink" activeClassName="selected">Page 2</NavLink>
    </div>
  )
}


export default Navbar;

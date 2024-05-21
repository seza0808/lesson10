import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/add"}>Add</NavLink>
      <NavLink to={"/edit"}>Edit</NavLink>
      {/* <NavLink to={"/products"}>List</NavLink> */}
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Nav.scss";
function Navbar() {
  return (
    <nav class="nav">
      <div>logo</div>

      <div class="container">
        <input type="text" placeholder="Search..."></input>
        <div class="search"></div>
      </div>

      <div class="gridclm">
        <div>productos</div>
        <div>servicios</div>
        <div>about as</div>
      </div>
      <div>foto</div>
    </nav>
  );
}

export default Navbar;

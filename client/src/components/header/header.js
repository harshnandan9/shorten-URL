import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function header() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <span>U</span>RL
        <span>S</span>hortner
      </h2>
      <ul className="nav-links">
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/urllist" className="urllist">
          <li>URL List</li>
        </Link>
      </ul>
    </nav>
  );
}

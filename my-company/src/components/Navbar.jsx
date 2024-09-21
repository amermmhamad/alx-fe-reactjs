// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.link}>
            Services
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Basic inline styles for Navbar (optional)
const styles = {
  navbar: {
    backgroundColor: "#3d837b",
    padding: "20px",
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;

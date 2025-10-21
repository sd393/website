import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlinks">
                <li><a href="#" style={{ color: "black" }}>Notes</a></li>
                <li><a href="#" style={{ color: "black" }}>Thoughts</a></li>
            </ul>
        </div>
    );
};

export default Navbar;

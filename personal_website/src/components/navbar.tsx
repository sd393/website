import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlinks">
                <li><a className="navLinkColor">Notes</a></li>
                <li><a className="navLinkColor">Thoughts</a></li>
            </ul>
        </div>
    );
};

export default Navbar;

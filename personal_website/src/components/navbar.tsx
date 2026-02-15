import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlinks">
                <li><Link to="/notes" className="navLinkColor">Notes</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;

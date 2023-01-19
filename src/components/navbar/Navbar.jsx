import { NavLink } from "react-router-dom";
import "./../navbar/navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-container">
            <NavLink to="/" className="logo-name">
            <div className="logo">
                <span >Booking.com</span>
            </div>
                </NavLink>
            <div className="navbar-item">
                <button className="btn-nav">Register</button>
                <button className="btn-nav">Sign in</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar;
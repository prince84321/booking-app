import "./../navbar/navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-container">
            <div className="logo">
                <span>Booking.com</span>
            </div>
            <div className="navbar-item">
                <button className="btn-nav">Register</button>
                <button className="btn-nav">Sign in</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar;
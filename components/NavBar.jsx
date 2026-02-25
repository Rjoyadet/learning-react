import { Link } from "react-router-dom";



function NavBar() {
    return <nav className="navbar">
<div className="navbar-brand">

    <Link to="/">Movie App</Link>
</div>
<div className="navbar-links"></div>
<Link to="/" className="nav-link">Home</Link>
<Link to="/favorites" className="nav-link">Favorites</Link>
    </nav>

}

export default  NavBar
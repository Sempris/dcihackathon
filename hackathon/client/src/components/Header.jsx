import "./Header.scss";
import icon from '../images/favicon.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <NavLink className="nav-link" to="Menu"><img src={icon} alt="icon"/></NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-around">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}
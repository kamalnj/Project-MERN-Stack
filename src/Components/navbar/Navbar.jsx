import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { doSignOut } from '../Auth/AuthContext'
import { useAuth } from "../Auth/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogout = () => {
    doSignOut().then(() => {
      navigate('/');
    });
  };

  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Logo" width={80} />
      </NavLink>
      <nav ref={navRef}>
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/products">
          Nos produits
        </NavLink>
        <NavLink to="/about">
          À propos de nous
        </NavLink>
		<NavLink to="/durabilité">
          Durabilité
        </NavLink>
        <NavLink to="/careers">
          Carrières
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        {userLoggedIn && (
          <>
            <NavLink to="/admin">
              Dashboard
            </NavLink>
            <button onClick={handleLogout} className=" hover:text-black">
              Logout
            </button>
          </>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

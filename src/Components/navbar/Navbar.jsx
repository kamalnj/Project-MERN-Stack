import { useRef } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/logo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			 <a href="/"><img  src={logo} alt="" height={80} /></a>
			<nav ref={navRef}>
            <NavLink to="/" exact activeClassName="active">Accueil</NavLink>
                <NavLink to="/products" activeClassName="active">Nos produits</NavLink>
                <NavLink to="/about" activeClassName="active">À propos de nous</NavLink>
                <NavLink to="/careers" activeClassName="active">Carrières</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/login" activeClassName="active">Connectez-vous</NavLink>  
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
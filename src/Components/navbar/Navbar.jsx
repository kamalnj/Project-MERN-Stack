import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/logo.png'
import Button from '@mui/material/Button';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo} alt="" height={80} />
			<nav ref={navRef}>
				<a href="/#">Acceuil</a>
				<a href="/#">Nos produits</a>
				<a href="/#">À propos de nous</a>
				<a href="/#">Carrières</a>
                <a href="/#">Contact</a>  
                <a href="/#">Connectez-vous</a>  
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
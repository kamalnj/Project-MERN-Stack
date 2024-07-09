import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-white">© 2024 ECCBC. All rights reserved.</p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    <NavLink className="hover:text-red-600 text-sm text-white" to="/" activeClassName="active">
                            Accueil
                        </NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/products" activeClassName="active">
                            Nos produits
                        </NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/about" activeClassName="active">
                            À propos de nous
                        </NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/durabilité" activeClassName="active">
                            Durabilité
                        </NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/careers" activeClassName="active">
                            Carrières
                        </NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

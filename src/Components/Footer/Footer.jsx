import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
                    <p className="text-sm text-white">© 2024 ECCBC.All rights reserved.</p>
                    <div className="flex space-x-4">
                        <NavLink className=" hover:text-red-600 text-sm text-white" to="/products" activeClassName="active">Nos produits</NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/about" activeClassName="active">À propos de nous</NavLink>
                        <NavLink className=" hover:text-red-600 text-sm text-white" to="/careers" activeClassName="active">Carrières</NavLink>
                        <NavLink className="hover:text-red-600 text-sm text-white" to="/contact" activeClassName="active">Contact</NavLink>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="hover:text-red-600 transition-colors">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1c-0.6,0-1.1-0.2-1.6-0.5c0,0.1,0,0.2,0,0.3,0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.1-1.3,0.1c-0.3,0-0.6-0.1-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z" />
                            </svg>
                        </a>
                        <a href="/" className="hover:text-red-600 transition-colors">
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </a>
                        <a href="/" className="hover:text-red-600 transition-colors">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-2.992,1.791-4.619,4.42-4.619c1.256,0,2.332,0.094,2.645,0.136v3.065l-1.814,0.001c-1.424,0-1.698,0.677-1.698,1.67V10.6h3.396l-0.441,4h-2.955V24h5.798c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

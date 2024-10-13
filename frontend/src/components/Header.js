// src/components/Header.js
import React from 'react';
import theme from '../styles/theme';

function Header() {
    return (
        <header className={`${theme.colors.background} shadow-md`}>
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className={`${theme.fonts.heading} text-3xl font-bold ${theme.colors.text}`}>GlamBook</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className={`${theme.colors.text} hover:text-pink-500`}>Home</a></li>
                        <li><a href="/services" className={`${theme.colors.text} hover:text-pink-500`}>Services</a></li>
                        <li><a href="/contact" className={`${theme.colors.text} hover:text-pink-500`}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
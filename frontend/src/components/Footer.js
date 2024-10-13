
// src/components/Footer.js
import React from 'react';
import theme from '../styles/theme';

function Footer() {
    return (
        <footer className={`${theme.colors.background} ${theme.colors.text} py-6`}>
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2024 GlamBook. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
